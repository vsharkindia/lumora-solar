export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="13" r="6" fill="#f98507" />
        <g stroke="#ffa620" strokeWidth="2" strokeLinecap="round">
          <path d="M16 2v3M5 13H2M30 13h-3M7.5 4.5l2 2M24.5 4.5l-2 2" />
        </g>
        <path d="M4 22h24l-3 7H7z" fill={light ? "#e4eaf4" : "#1d2840"} />
        <path d="M10 22l-1.2 7M16 22v7M22 22l1.2 7M5.4 25.5h21.2" stroke={light ? "#121a2d" : "#9eb0cf"} strokeWidth="1" />
      </svg>
      <span className={`font-display text-lg font-extrabold tracking-tight ${light ? "text-white" : "text-night-900"}`}>
        Lumora<span className="text-sun-500">Solar</span>
      </span>
    </span>
  );
}
