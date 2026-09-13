import StatusIndicator from "./StatusIndicator.jsx";

export default function UserListItem({ user, selected, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-between gap-2.5 px-3.5 py-2 cursor-pointer border-l-2 group
        ${selected ? "bg-term-selected border-term-green" : "border-transparent hover:border-term-border-bright"}`}
    >
      <div className="flex items-center gap-2.5 min-w-0">
        <StatusIndicator status={user.status} />
        <span
          className={`text-sm truncate ${
            selected ? "text-term-green" : "text-term-text group-hover:text-term-cyan"
          }`}
        >
          [{user.initials}] {user.name}
        </span>
      </div>
      <span
        className={`text-xs shrink-0 ${user.status === "online" ? "text-term-online" : "text-term-dim"}`}
      >
        {user.status}
      </span>
    </div>
  );
}
