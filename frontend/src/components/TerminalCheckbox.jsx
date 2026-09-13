export default function TerminalCheckbox({ label, checked, onChange }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className="flex items-center gap-2.5 text-sm text-term-text hover:text-term-green transition-colors bg-transparent border-none p-0 cursor-pointer"
    >
      <span className={checked ? "text-term-green" : "text-term-dim"}>
        [{checked ? "✓" : " "}]
      </span>
      {label}
    </button>
  );
}
