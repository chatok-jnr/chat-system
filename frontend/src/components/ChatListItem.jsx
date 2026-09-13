import StatusIndicator from "./StatusIndicator.jsx";
import { MOCK_MESSAGES } from "../data/mockData.js";

export default function ChatListItem({ user, selected, onClick }) {
  const thread = MOCK_MESSAGES[user.id] || [];
  const lastMsg = thread[thread.length - 1];

  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-2.5 px-3.5 py-2 cursor-pointer border-l-2 group
        ${selected ? "bg-term-selected border-term-green" : "border-transparent hover:border-term-border-bright"}`}
    >
      <StatusIndicator status={user.status} />
      <div className="min-w-0 flex-1">
        <div
          className={`text-sm truncate ${
            selected ? "text-term-green" : "text-term-text group-hover:text-term-cyan"
          }`}
        >
          [{user.initials}] {user.name}
        </div>
        {lastMsg && (
          <div className="text-xs text-term-dim truncate">{lastMsg.text}</div>
        )}
      </div>
    </div>
  );
}
