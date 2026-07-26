import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/prompts-instagram")({
  component: RedirectToPrompts,
});

function RedirectToPrompts() {
  useEffect(() => {
    window.location.href = "https://sites.rdgdigital.com.br/prompts";
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0a0a0f] text-white p-6 text-center">
      <div>
        <p className="text-sm font-semibold text-purple-400">Redirecionando para a Biblioteca de Prompts...</p>
        <p className="mt-2 text-xs text-white/50">
          Se não for redirecionado automaticamente,{" "}
          <a
            href="https://sites.rdgdigital.com.br/prompts"
            className="text-purple-400 underline font-bold"
          >
            clique aqui
          </a>.
        </p>
      </div>
    </div>
  );
}
