/**
 * RME logo mark: an asymmetric node network with an accent hub.
 * Edges inherit currentColor (so it adapts to context); the hub is the brand
 * signal green with a soft orbit ring. Distinct from a generic "three dots".
 */
export function LogoMark({ size = 28, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* edges */}
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.85">
        <path d="M16 16 6.5 8.5" />
        <path d="M16 16 25.5 7.5" />
        <path d="M16 16 25 25" />
        <path d="M16 16 7.5 24.5" />
        <path d="M6.5 8.5 25.5 7.5" />
        <path d="M25.5 7.5 25 25" />
      </g>

      {/* outer nodes */}
      <g fill="#fbfaf8" stroke="currentColor" strokeWidth="1.4">
        <circle cx="6.5" cy="8.5" r="2.4" />
        <circle cx="25.5" cy="7.5" r="2.4" />
        <circle cx="25" cy="25" r="2.4" />
        <circle cx="7.5" cy="24.5" r="2.4" />
      </g>

      {/* accent hub with orbit ring */}
      <circle cx="16" cy="16" r="6" stroke="#2f855a" strokeWidth="1.2" opacity="0.35" />
      <circle cx="16" cy="16" r="3.8" fill="#2f855a" />
    </svg>
  );
}

export function Wordmark() {
  return <span className="font-display text-lg font-bold tracking-tight">RME</span>;
}
