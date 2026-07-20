/**
 * Esferas/orbes 3D decorativos. Usa CSS perspective + animação contínua.
 * Os elementos parecem flutuar à frente do conteúdo.
 */
export function Orbits3D({ className = "" }: { className?: string }) {
  return (
    <div className={`orbits-3d pointer-events-none scene-3d ${className}`} aria-hidden>
      <div className="orbits-stage">
        <div className="orb orb-cyan" data-depth="1.6">
          <span className="orb-core" />
          <span className="orb-ring" />
        </div>
        <div className="orb orb-violet" data-depth="1.2">
          <span className="orb-core" />
          <span className="orb-ring" />
        </div>
        <div className="orb orb-mini orb-mini-1" data-depth="2" />
        <div className="orb orb-mini orb-mini-2" data-depth="1.8" />
        <div className="orb orb-mini orb-mini-3" data-depth="2.2" />
      </div>
    </div>
  );
}
