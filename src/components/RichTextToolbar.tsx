import React, { useEffect, useState, useRef } from "react";
import { Bold, Italic, Underline, Baseline } from "lucide-react";

export function RichTextToolbar() {
  const [position, setPosition] = useState<{ top: number; left: number } | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const toolbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEditModeChange = (e: any) => {
      setIsEditMode(e.detail);
    };
    window.addEventListener("editModeChanged", handleEditModeChange);

    const handleSelectionChange = () => {
      const selection = window.getSelection();
      
      // Verifica se há seleção e se não está vazia
      if (!selection || selection.rangeCount === 0 || selection.isCollapsed) {
        setPosition(null);
        return;
      }

      // Verifica se o elemento selecionado é editável
      let isEditable = false;
      let node = selection.anchorNode;
      while (node) {
        if (node.nodeType === 1 && (node as HTMLElement).isContentEditable) {
          isEditable = true;
          break;
        }
        node = node.parentNode;
      }

      if (isEditable) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        
        // Posição ajustada acima do texto selecionado
        setPosition({
          top: rect.top + window.scrollY - 50,
          left: rect.left + window.scrollX + (rect.width / 2),
        });
      } else {
        setPosition(null);
      }
    };

    document.addEventListener("selectionchange", handleSelectionChange);
    
    // Ocultar ao clicar fora de um editável
    const handleMouseUp = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isEditableTarget = target.isContentEditable || target.closest('.rich-text-toolbar');
      if (!isEditableTarget) {
         const selection = window.getSelection();
         if (selection && selection.isCollapsed) {
           setPosition(null);
         }
      }
    };
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("selectionchange", handleSelectionChange);
      document.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("editModeChanged", handleEditModeChange);
    };
  }, []);

  if (!position) return null;

  const handleCommand = (command: string, value: string | undefined = undefined) => {
    document.execCommand(command, false, value);
    // Para forçar a atualização do React em componentes que dependem de innerHTML, dispararemos um blur no elemento ativo
    const activeEl = document.activeElement;
    if (activeEl && activeEl.getAttribute("contenteditable") === "true") {
       activeEl.dispatchEvent(new Event("blur", { bubbles: true })); 
    }
  };

  return (
    <div
      ref={toolbarRef}
      className="rich-text-toolbar absolute z-[9999] bg-gray-900 border border-white/20 rounded-lg shadow-2xl p-1.5 flex items-center gap-1 backdrop-blur-xl transform -translate-x-1/2 transition-opacity duration-200"
      style={{ top: position.top, left: position.left }}
    >
      <button
        onMouseDown={(e) => { e.preventDefault(); handleCommand("bold"); }}
        className="p-1.5 hover:bg-white/10 rounded-md text-white transition-colors"
        title="Negrito"
      >
        <Bold size={16} />
      </button>
      <button
        onMouseDown={(e) => { e.preventDefault(); handleCommand("italic"); }}
        className="p-1.5 hover:bg-white/10 rounded-md text-white transition-colors"
        title="Itálico"
      >
        <Italic size={16} />
      </button>
      <button
        onMouseDown={(e) => { e.preventDefault(); handleCommand("underline"); }}
        className="p-1.5 hover:bg-white/10 rounded-md text-white transition-colors"
        title="Sublinhado"
      >
        <Underline size={16} />
      </button>
      
      <div className="w-px h-5 bg-white/20 mx-1"></div>
      
      <div className="relative group flex items-center justify-center p-1.5 hover:bg-white/10 rounded-md cursor-pointer">
        <Baseline size={16} className="text-white" />
        <input
          type="color"
          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
          onChange={(e) => handleCommand("foreColor", e.target.value)}
          title="Cor do Texto"
        />
      </div>
    </div>
  );
}
