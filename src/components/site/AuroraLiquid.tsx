export function AuroraLiquid() {
  return (
    <svg
      aria-hidden
      className="aurora-liquid pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <filter id="liquid" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.012 0.018" numOctaves="2" seed="7">
            <animate attributeName="baseFrequency" dur="22s" values="0.012 0.018;0.02 0.014;0.012 0.018" repeatCount="indefinite" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="80" />
          <feGaussianBlur stdDeviation="40" />
        </filter>
        <radialGradient id="gA" cx="30%" cy="20%" r="50%">
          <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#00D9FF" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="gB" cx="75%" cy="60%" r="55%">
          <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="gC" cx="55%" cy="90%" r="60%">
          <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#00D9FF" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g filter="url(#liquid)">
        <rect width="1200" height="800" fill="url(#gA)" />
        <rect width="1200" height="800" fill="url(#gB)" />
        <rect width="1200" height="800" fill="url(#gC)" />
      </g>
    </svg>
  );
}
