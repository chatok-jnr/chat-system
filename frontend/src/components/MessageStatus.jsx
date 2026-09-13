export default function MessageStatus({ status }) {
  if (status === "seen") {
    return (
      <span className="text-term-green text-xs shrink-0 tracking-wide">
        [✓✓] SEEN
      </span>
    );
  }

  if (status === "delivered") {
    return <span className="text-term-cyan/70 text-xs shrink-0">[✓]</span>;
  }

  // "sent" (or unset) — message has left the client but isn't confirmed yet
  return <span className="text-term-dim text-xs shrink-0">[✓]</span>;
}
