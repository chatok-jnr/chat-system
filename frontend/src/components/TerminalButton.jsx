export default function TerminalButton({ children, onClick, active = false, small = false, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`font-mono tracking-wide transition-colors duration-150 border bg-transparent
        ${small ? "text-xs px-2.5 py-1" : "text-sm px-3.5 py-1.5"}
        ${active ? "border-term-border-bright text-term-green" : "border-term-border text-term-text"}
        hover:text-term-green hover:border-term-border-bright
        ${className}`}
    >
      {children}
    </button>
  );
}
