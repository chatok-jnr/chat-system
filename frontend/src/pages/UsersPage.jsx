import { useState, useEffect } from "react";
import UserListItem from "../components/UserListItem.jsx";
import StatusIndicator from "../components/StatusIndicator.jsx";
import { USERS } from "../data/mockData.js";

export default function UsersPage() {
  const [selectedId, setSelectedId] = useState(USERS[0].id);
  const [mobileView, setMobileView] = useState("list");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const selectedUser = USERS.find((u) => u.id === selectedId);

  const handleSelect = (id) => {
    setSelectedId(id);
    if (isMobile) setMobileView("detail");
  };

  const showList = !isMobile || mobileView === "list";
  const showDetail = !isMobile || mobileView === "detail";

  return (
    <div className="flex-1 flex min-w-0 min-h-0">
      {showList && (
        <div className="w-full md:w-[300px] md:min-w-[300px] h-full bg-term-bg2 border-r border-term-border flex flex-col">
          <div className="px-3.5 pt-4 pb-2 text-term-green text-sm">&gt; users</div>
          <div className="px-3.5 pb-2 text-[11px] tracking-wider text-term-muted">
            USERS ({USERS.length})
          </div>
          <div className="flex-1 overflow-y-auto">
            {USERS.map((u) => (
              <UserListItem
                key={u.id}
                user={u}
                selected={selectedId === u.id}
                onClick={() => handleSelect(u.id)}
              />
            ))}
          </div>
        </div>
      )}

      {showDetail && selectedUser && (
        <div className="flex-1 flex flex-col min-w-0 bg-term-bg">
          <div className="flex items-center gap-3 px-4 md:px-5 py-3 border-b border-term-border">
            {isMobile && (
              <button
                onClick={() => setMobileView("list")}
                className="text-term-cyan text-sm bg-transparent border-none cursor-pointer p-0 shrink-0"
              >
                &lt; [U] Users
              </button>
            )}
            <div className="text-term-text text-sm truncate">
              [ {selectedUser.initials} ] {selectedUser.name}
            </div>
          </div>

          <div className="p-5 space-y-4 text-sm max-w-md">
            <div className="flex items-center gap-2">
              <StatusIndicator status={selectedUser.status} />
              <span className={selectedUser.status === "online" ? "text-term-online" : "text-term-dim"}>
                {selectedUser.status}
              </span>
            </div>

            <DetailRow label="Email" value={selectedUser.email} />
            <DetailRow label="Role" value={selectedUser.role} />
            <DetailRow label="Last active" value={selectedUser.lastActive} />
          </div>
        </div>
      )}
    </div>
  );
}

function DetailRow({ label, value }) {
  return (
    <div className="border-t border-term-border pt-3">
      <div className="text-term-muted text-xs mb-1">{label}</div>
      <div className="text-term-text">{value}</div>
    </div>
  );
}
