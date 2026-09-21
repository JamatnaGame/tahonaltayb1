export function MillMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="32" cy="32" r="29" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="32" cy="32" r="18" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="32" cy="32" r="4" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.25">
        <line x1="39" y1="32" x2="48.5" y2="32" />
        <line x1="32" y1="39" x2="32" y2="48.5" />
        <line x1="25" y1="32" x2="15.5" y2="32" />
        <line x1="32" y1="25" x2="32" y2="15.5" />
        <line x1="37" y1="37" x2="43.7" y2="43.7" />
        <line x1="27" y1="37" x2="20.3" y2="43.7" />
        <line x1="27" y1="27" x2="20.3" y2="20.3" />
        <line x1="37" y1="27" x2="43.7" y2="20.3" />
      </g>
    </svg>
  );
}
