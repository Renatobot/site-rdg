import { useState, useEffect } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { websiteMeta, BASE_URL } from "@/lib/seo";

const TITLE = "RDG Stream — Streaming & TV Digital";
const DESCRIPTION = "Plataforma exclusiva de streaming de TV digital e filmes VOD para membros VIP RDG.";
const CANONICAL_URL = `${BASE_URL}/streaming`;

export const Route = createFileRoute("/streaming")({
  head: () => ({
    meta: websiteMeta(TITLE, DESCRIPTION, CANONICAL_URL),
    links: [{ rel: "canonical", href: CANONICAL_URL }],
  }),
  component: StreamingPage,
});

function StreamingPage() {
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  useEffect(() => {
    const key = localStorage.getItem("rdg_license_key");
    if (!key) {
      alert(
        "🔒 Acesso Restrito!\n\nVocê precisa estar logado na Área de Membros para utilizar a Plataforma IPTV Streaming."
      );
      navigate({ to: "/membros" });
    } else {
      setIsAuthorized(true);
    }
  }, [navigate]);

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-[#070913] text-white flex items-center justify-center p-4">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 rounded-full border-4 border-cyan-500/20 border-t-cyan-400 animate-spin mx-auto" />
          <p className="text-sm text-slate-400">Verificando autorização de acesso à Área de Membros...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-[#070913] overflow-hidden">
      <iframe
        src="/streaming/index.html"
        title="RDG IPTV Stream"
        className="w-full h-full border-0"
        allow="autoplay; fullscreen; picture-in-picture"
      />
    </div>
  );
}
