import ChatListItem from "./ChatListItem.jsx";

export default function ChatList({ users, selectedId, onSelect }) {
  const online = users.filter((u) => u.status === "online");
  const offline = users.filter((u) => u.status === "offline");

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="px-3.5 pt-3 pb-1 text-[11px] tracking-wider text-term-muted">
        ONLINE ({online.length})
      </div>
      {online.map((u) => (
        <ChatListItem key={u.id} user={u} selected={selectedId === u.id} onClick={() => onSelect(u.id)} />
      ))}

      <div className="px-3.5 pt-4 pb-1 text-[11px] tracking-wider text-term-muted">
        OFFLINE ({offline.length})
      </div>
      {offline.map((u) => (
        <ChatListItem key={u.id} user={u} selected={selectedId === u.id} onClick={() => onSelect(u.id)} />
      ))}
    </div>
  );
}
