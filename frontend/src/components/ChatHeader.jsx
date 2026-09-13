import TerminalButton from "./TerminalButton.jsx";
import StatusIndicator from "./StatusIndicator.jsx";

export default function ChatHeader({ user, onBack }) {
  return (
    <div className="flex items-center justify-between px-4 md:px-5 py-3 border-b border-term-border">
      <div className="flex items-center gap-3 min-w-0">
        {onBack && (
          <button
            onClick={onBack}
            className="text-term-cyan text-sm bg-transparent border-none cursor-pointer p-0 shrink-0"
          >
            &lt; [C] Chats
          </button>
        )}
        <div className="min-w-0">
          <div className="text-term-text text-sm truncate">
            [ {user.initials} ] {user.name}
          </div>
          <div className={`text-xs flex items-center ${user.status === "online" ? "text-term-online" : "text-term-dim"}`}>
            <StatusIndicator status={user.status} />
            {user.status}
          </div>
        </div>
      </div>
      <div className="hidden sm:flex gap-1.5 shrink-0">
        <TerminalButton small>[ ? ] help</TerminalButton>
      </div>
    </div>
  );
}
