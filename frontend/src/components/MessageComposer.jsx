import { useState } from "react";
import TerminalButton from "./TerminalButton.jsx";

export default function MessageComposer({ onSend }) {
  const [value, setValue] = useState("");

  const submit = () => {
    const trimmed = value.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setValue("");
  };

  return (
    <div className="flex items-center gap-2.5 px-4 md:px-5 py-3 border-t border-term-border">
      <div className="flex-1 flex items-center gap-2 px-3 py-2 bg-term-panel border border-term-border focus-within:border-term-green transition-colors duration-150">
        <span className="text-term-green">&gt;</span>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          placeholder="Type a message..."
          className="flex-1 bg-transparent border-none outline-none text-term-text text-sm font-mono"
        />
      </div>
      <TerminalButton onClick={submit}>[ Send ]</TerminalButton>
    </div>
  );
}
