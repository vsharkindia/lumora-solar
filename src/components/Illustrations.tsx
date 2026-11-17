// Hand-built SVG illustrations, so the site needs no stock photography.

/** Hero scene: a modern home with rooftop solar under a big sun. */
export function HeroHouse() {
  return (
    <svg viewBox="0 0 520 420" className="h-auto w-full" role="img" aria-label="A modern home with solar panels on the roof">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffecc6" />
          <stop offset="100%" stopColor="#fff8eb" />
        </linearGradient>
        <linearGradient id="panel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2c3c5c" />
          <stop offset="100%" stopColor="#121a2d" />
        </linearGradient>
        <radialGradient id="sunGlow">
          <stop offset="0%" stopColor="#ffbf4a" stopOpacity=".9" />
          <stop offset="100%" stopColor="#ffbf4a" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="520" height="420" rx="32" fill="url(#sky)" />
      <circle cx="400" cy="96" r="110" fill="url(#sunGlow)" />
      <g className="animate-spin-slow" style={{ transformOrigin: "400px 96px" }}>
        {Array.from({ length: 12 }).map((_, i) => (
          <rect key={i} x="398" y="10" width="4" height="22" rx="2" fill="#ffa620" transform={`rotate(${i * 30} 400 96)`} />
        ))}
      </g>
      <circle cx="400" cy="96" r="44" fill="#f98507" />
      {/* hills */}
      <path d="M0 330 Q130 270 260 320 T520 300 V420 H0z" fill="#d9e8c9" />
      <path d="M0 360 Q160 320 300 350 T520 345 V420 H0z" fill="#b9d6a0" />
      {/* house */}
      <rect x="120" y="230" width="250" height="130" fill="#ffffff" />
      <rect x="370" y="262" width="80" height="98" fill="#f3f6fb" />
      <path d="M100 236 L245 150 L390 236 Z" fill="#374b72" />
      <path d="M365 262 L410 236 L460 262 Z" fill="#4a628c" />
      {/* panels */}
      <g transform="translate(178 170) skewX(-31) scale(1 .62)">
        {Array.from({ length: 3 }).map((_, r) =>
          Array.from({ length: 5 }).map((__, c) => (
            <rect key={`${r}-${c}`} x={c * 34} y={r * 40} width="31" height="37" rx="2" fill="url(#panel)" stroke="#6c83ab" strokeWidth="1" />
          ))
        )}
      </g>
      {/* windows + door */}
      <rect x="150" y="262" width="62" height="48" rx="4" fill="#c9d4e6" />
      <rect x="232" y="262" width="62" height="48" rx="4" fill="#c9d4e6" />
      <rect x="312" y="282" width="36" height="78" rx="4" fill="#dd6002" />
      <rect x="385" y="282" width="50" height="36" rx="4" fill="#c9d4e6" />
      {/* battery on wall */}
      <rect x="452" y="300" width="22" height="40" rx="5" fill="#ffffff" stroke="#9eb0cf" />
      <rect x="458" y="308" width="10" height="3" rx="1.5" fill="#16a34a" />
      <path d="M120 360 H470" stroke="#9eb0cf" strokeWidth="2" />
    </svg>
  );
}

/** Small scene used on project cards; colours vary per project. */
export function ProjectScene({ kind, palette }: { kind: "Residential" | "Commercial" | "Battery"; palette: [string, string] }) {
  const id = `g-${palette[0].slice(1)}-${palette[1].slice(1)}-${kind}`;
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={palette[0]} />
          <stop offset="100%" stopColor={palette[1]} />
        </linearGradient>
      </defs>
      <rect width="320" height="180" fill={`url(#${id})`} />
      <circle cx="262" cy="46" r="22" fill="#fff8eb" opacity=".9" />
      <path d="M0 150 Q80 120 160 140 T320 132 V180 H0z" fill="#ffffff" opacity=".35" />
      {kind === "Commercial" ? (
        <g>
          <rect x="40" y="92" width="220" height="58" fill="#ffffff" opacity=".95" />
          <g fill="#1d2840">
            {Array.from({ length: 9 }).map((_, i) => (
              <rect key={i} x={50 + i * 23} y="78" width="19" height="12" rx="1.5" transform={`skewX(-20)`} />
            ))}
          </g>
          <rect x="60" y="110" width="40" height="40" fill="#c9d4e6" />
          <rect x="200" y="112" width="44" height="22" fill="#c9d4e6" />
        </g>
      ) : (
        <g>
          <rect x="78" y="96" width="150" height="54" fill="#ffffff" opacity=".95" />
          <path d="M64 100 L153 52 L242 100 Z" fill="#1d2840" />
          <g transform="translate(110 64) skewX(-28) scale(1 .6)" fill="#2c3c5c" stroke="#9eb0cf" strokeWidth=".8">
            {Array.from({ length: 2 }).map((_, r) =>
              Array.from({ length: 4 }).map((__, c) => <rect key={`${r}${c}`} x={c * 20} y={r * 26} width="18" height="24" rx="1" />)
            )}
          </g>
          <rect x="140" y="116" width="22" height="34" fill="#dd6002" />
          {kind === "Battery" && (
            <g>
              <rect x="236" y="112" width="16" height="30" rx="4" fill="#ffffff" stroke="#374b72" />
              <rect x="240" y="118" width="8" height="3" rx="1.5" fill="#16a34a" />
            </g>
          )}
        </g>
      )}
    </svg>
  );
}

export function Icon({ name, className = "h-6 w-6" }: { name: "sun" | "home" | "building" | "battery" | "plug" | "shield" | "chart" | "leaf"; className?: string }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {name === "sun" && (<><circle cx="12" cy="12" r="4" {...p} /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" {...p} /></>)}
      {name === "home" && <path d="M3 11l9-7 9 7M5 10v10h14V10M10 20v-6h4v6" {...p} />}
      {name === "building" && <path d="M4 21V5l8-3v19M12 9h8v12M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2M2 21h20" {...p} />}
      {name === "battery" && (<><rect x="3" y="7" width="16" height="10" rx="2" {...p} /><path d="M21 10v4M8 12h4M10 10v4" {...p} /></>)}
      {name === "plug" && <path d="M9 2v5M15 2v5M6 7h12v4a6 6 0 01-12 0zM12 17v5" {...p} />}
      {name === "shield" && <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM9 12l2 2 4-4" {...p} />}
      {name === "chart" && <path d="M3 3v18h18M7 15l4-4 3 3 6-6" {...p} />}
      {name === "leaf" && <path d="M5 19c0-9 6-14 15-15-1 9-6 15-15 15zM5 19l7-7" {...p} />}
    </svg>
  );
}
