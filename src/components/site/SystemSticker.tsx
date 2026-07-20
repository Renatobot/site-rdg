type Variant = "barber" | "beauty" | "fit";

type Props = {
  variant: Variant;
  accent: string;
  size?: number;
  className?: string;
};

/**
 * Pequeno "clipe" animado em SVG inline com fundo transparente.
 * Pensado pra sobrepor o mockup de cada sistema como um sticker.
 */
export function SystemSticker({ variant, accent, size = 132, className = "" }: Props) {
  return (
    <div
      aria-hidden
      className={`sticker-float pointer-events-none relative ${className}`}
      style={{ width: size, height: size }}
    >
      <div
        className="absolute inset-0 -z-10 rounded-full blur-2xl opacity-70"
        style={{ background: `radial-gradient(closest-side, ${accent}80, transparent 70%)` }}
      />
      <svg viewBox="0 0 120 120" width={size} height={size} fill="none">
        {variant === "barber" && <BarberArt c={accent} />}
        {variant === "beauty" && <BeautyArt c={accent} />}
        {variant === "fit" && <FitArt c={accent} />}
      </svg>
    </div>
  );
}

/* ---------------- Barber: poste girando + tesoura cortando ---------------- */
function BarberArt({ c }: { c: string }) {
  return (
    <g>
      {/* poste */}
      <rect x="46" y="18" width="28" height="64" rx="14" fill="rgba(255,255,255,0.06)" stroke={c} strokeWidth="1.5" />
      <defs>
        <pattern id="barber-stripes" patternUnits="userSpaceOnUse" width="14" height="14" patternTransform="rotate(35)">
          <rect width="14" height="14" fill="rgba(255,255,255,0.04)" />
          <rect width="14" height="7" fill={c} opacity="0.85">
            <animate attributeName="y" values="-7;7" dur="1.6s" repeatCount="indefinite" />
          </rect>
        </pattern>
      </defs>
      <rect x="48" y="22" width="24" height="56" rx="12" fill="url(#barber-stripes)" />
      {/* topo/base */}
      <rect x="42" y="14" width="36" height="6" rx="3" fill={c} />
      <rect x="42" y="82" width="36" height="6" rx="3" fill={c} />
      {/* tesoura cortando */}
      <g style={{ transformOrigin: "60px 100px", animation: "scissor 2.2s ease-in-out infinite" }}>
        <circle cx="52" cy="104" r="6" stroke={c} strokeWidth="2" />
        <circle cx="68" cy="104" r="6" stroke={c} strokeWidth="2" />
        <line x1="56" y1="100" x2="78" y2="86" stroke={c} strokeWidth="2.4" strokeLinecap="round" />
        <line x1="64" y1="100" x2="42" y2="86" stroke={c} strokeWidth="2.4" strokeLinecap="round" />
      </g>
    </g>
  );
}

/* ---------------- Beauty: sparkle pulsando + bolinhas orbitando ---------------- */
function BeautyArt({ c }: { c: string }) {
  return (
    <g>
      <g style={{ transformOrigin: "60px 60px", animation: "sparkle 2.4s ease-in-out infinite" }}>
        <path
          d="M60 18 L66 50 L98 60 L66 70 L60 102 L54 70 L22 60 L54 50 Z"
          fill={c}
          opacity="0.9"
        />
      </g>
      {/* coração pequeno */}
      <path
        d="M60 70 C 55 64, 47 64, 47 72 C 47 80, 60 88, 60 88 C 60 88, 73 80, 73 72 C 73 64, 65 64, 60 70 Z"
        fill="#fff"
        opacity="0.95"
      />
      {/* orbita */}
      <g style={{ transformOrigin: "60px 60px", animation: "orbit 6s linear infinite" }}>
        <circle cx="60" cy="14" r="3.5" fill={c} />
        <circle cx="106" cy="60" r="2.5" fill="#fff" opacity="0.9" />
        <circle cx="60" cy="106" r="3" fill={c} opacity="0.7" />
        <circle cx="14" cy="60" r="2" fill="#fff" opacity="0.8" />
      </g>
    </g>
  );
}

/* ---------------- Fit: haltere subindo + barra de progresso ---------------- */
function FitArt({ c }: { c: string }) {
  return (
    <g>
      {/* haltere */}
      <g style={{ transformOrigin: "60px 60px", animation: "lift 1.6s ease-in-out infinite" }}>
        <rect x="56" y="34" width="8" height="52" rx="2" fill={c} />
        <rect x="38" y="40" width="14" height="40" rx="3" fill={c} />
        <rect x="68" y="40" width="14" height="40" rx="3" fill={c} />
        <rect x="30" y="46" width="8" height="28" rx="2" fill={c} opacity="0.7" />
        <rect x="82" y="46" width="8" height="28" rx="2" fill={c} opacity="0.7" />
      </g>
      {/* barra de progresso */}
      <rect x="18" y="100" width="84" height="6" rx="3" fill="rgba(255,255,255,0.12)" />
      <rect x="18" y="100" width="84" height="6" rx="3" fill={c}>
        <animate attributeName="width" values="6;84;84" dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;1;0.4" dur="2.4s" repeatCount="indefinite" />
      </rect>
      {/* check */}
      <g opacity="0.9">
        <path d="M48 18 L56 26 L74 10" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <animate attributeName="stroke-dasharray" values="0,60;60,0" dur="2.4s" repeatCount="indefinite" />
        </path>
      </g>
    </g>
  );
}
