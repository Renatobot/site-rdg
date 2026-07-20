/**
 * Palavra em 3D — cada letra recebe translateZ escalonado para sensação volumétrica.
 * Reage à variável CSS --p (do scroll-scene pai) com rotateY suave.
 */
export function Kinetic3DWord({ text, className = "" }: { text: string; className?: string }) {
  const letters = Array.from(text);
  return (
    <span className={`kinetic-3d-word ${className}`} aria-label={text}>
      {letters.map((ch, i) => (
        <span
          key={i}
          className="k3d-letter"
          style={{ ["--li" as string]: i, ["--lt" as string]: letters.length }}
          aria-hidden
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );
}
