import React, { useEffect, useState, useRef } from "react";
import { Bold, Italic, Underline, Baseline } from "lucide-react";

export function RichTextToolbar() {
  const [position, setPosition] = useState<{ top: number; left: number } | null>(null);
  const [currentRange, setCurrentRange] = useState<Range | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const toolbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEditModeChange = (e: any) => {
      setIsEditMode(e.detail);
    };
    window.addEventListener("editModeChanged", handleEditModeChange);

    const handleSelectionChange = () => {
      const selection = window.getSelection();
      
      // Verifica se há seleção
      if (!selection || selection.rangeCount === 0) {
        if (toolbarRef.current && toolbarRef.current.contains(document.activeElement)) {
          return;
        }
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
        setCurrentRange(range.cloneRange());
        const rect = range.getBoundingClientRect();
        
        // Posição ajustada acima do texto selecionado
        setPosition({
          top: rect.top + window.scrollY - 50,
          left: rect.left + window.scrollX + (rect.width / 2),
        });
      } else {
        if (toolbarRef.current && toolbarRef.current.contains(document.activeElement)) {
          return;
        }
        setPosition(null);
      }
    };

    document.addEventListener("selectionchange", handleSelectionChange);
    
    // Ocultar ao clicar fora de um editável
    const handleMouseUp = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isEditableTarget = target.isContentEditable || target.closest('.rich-text-toolbar');
      if (!isEditableTarget) {
         setPosition(null);
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
    const selection = window.getSelection();
    let targetNode: HTMLElement | null = null;
    
    if (selection && currentRange) {
      selection.removeAllRanges();
      
      // Se não houver texto selecionado (apenas o cursor piscando), vamos selecionar todo o conteúdo do elemento
      if (currentRange.collapsed) {
        let node = currentRange.startContainer;
        let el = node.nodeType === 1 ? (node as HTMLElement) : (node.parentNode as HTMLElement);
        while (el && !el.isContentEditable && el.parentElement) {
          el = el.parentElement;
        }
        targetNode = el;
        
        const newRange = document.createRange();
        newRange.selectNodeContents(el);
        selection.addRange(newRange);
      } else {
        selection.addRange(currentRange);
        
        let node = currentRange.commonAncestorContainer;
        let el = node.nodeType === 1 ? (node as HTMLElement) : (node.parentNode as HTMLElement);
        while (el && !el.isContentEditable && el.parentElement) {
          el = el.parentElement;
        }
        targetNode = el;
      }
    }
    
    try { document.execCommand("styleWithCSS", false, true as any); } catch(e) {}
    document.execCommand(command, false, value);
    
    // Disparar eventos no elemento correto (já que o botão de cor rouba o foco)
    if (targetNode) {
       targetNode.dispatchEvent(new Event("input", { bubbles: true })); 
       targetNode.dispatchEvent(new Event("focusout", { bubbles: true })); 
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
      
      <div className="relative group flex items-center justify-center rounded-md">
        <button
          onMouseDown={(e) => {
             e.preventDefault(); 
             // We don't execute command here, just prevent focus loss.
             // The click event will open the color picker.
          }}
          onClick={(e) => {
             const input = e.currentTarget.nextElementSibling as HTMLInputElement;
             if (input) input.click();
          }}
          className="p-1.5 hover:bg-white/10 rounded-md text-white transition-colors flex items-center justify-center cursor-pointer"
          title="Cor do Texto"
        >
          <Baseline size={16} />
        </button>
        <input
          type="color"
          className="absolute opacity-0 w-0 h-0 pointer-events-none"
          tabIndex={-1}
          onChange={(e) => handleCommand("foreColor", e.target.value)}
        />
      </div>
    </div>
  );
}
