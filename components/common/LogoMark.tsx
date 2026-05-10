export default function LogoMark({ size = 30 }: { size?: number }) {
  return (
    <svg viewBox="0 0 60 60" width={size} height={size} aria-hidden="true">
      <circle cx="30" cy="30" r="29" fill="none" stroke="var(--accent)" strokeWidth="0.7" opacity="0.9" />
      {/* A — sharp chevron, accent blue */}
      <path
        d="M11 46 L21.5 16 L26 16 L26 30 L20.8 30 L18.7 36 L26 36 L26 46 L24 46 L22.5 41 L17.6 41 L16.4 46 Z"
        fill="var(--accent)"
      />
      {/* K — angular, ink color */}
      <path
        d="M30 16 L34 16 L34 28.5 L43 16 L48 16 L39 28 L49 46 L44 46 L37 33 L34 36.5 L34 46 L30 46 Z"
        fill="var(--ink)"
      />
    </svg>
  );
}
