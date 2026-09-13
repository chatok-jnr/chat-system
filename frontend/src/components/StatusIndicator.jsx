export default function StatusIndicator({ status }) {
  const isOnline = status === "online";
  return (
    <span
      className={`inline-block w-1.5 h-1.5 rounded-full mr-2 ${
        isOnline ? "bg-term-online animate-pulse-soft" : "bg-term-dim"
      }`}
      style={isOnline ? { boxShadow: "0 0 4px #00FF88" } : undefined}
    />
  );
}
