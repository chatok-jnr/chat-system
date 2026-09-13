import { NavLink, useNavigate } from "react-router-dom";
import StatusIndicator from "./StatusIndicator.jsx";
import { useAuth } from "../context/AuthContext.jsx";

const NAV_ITEMS = [
  { key: "chats", label: "[C] Chats", path: "/chats" },
  { key: "users", label: "[U] Users", path: "/users" },
  { key: "settings", label: "[S] Settings", path: "/settings" },
];

export default function Sidebar() {
  const { username, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  const navLinkClass = ({ isActive }) =>
    `font-mono text-xs md:text-sm px-2.5 py-1 md:px-3.5 md:py-1.5 border transition-colors duration-150 whitespace-nowrap
     ${isActive ? "border-term-border-bright text-term-green" : "border-term-border text-term-text"}
     hover:text-term-green hover:border-term-border-bright`;

  return (
    <div className="w-full md:w-[220px] md:min-w-[220px] md:h-full bg-term-bg2 border-b md:border-b-0 md:border-r border-term-border flex md:flex-col">
      <div className="hidden md:block px-3.5 pt-4 pb-2.5">
        <div className="text-term-green text-sm">&gt; chat</div>
      </div>

      <div className="flex md:flex-col gap-1.5 px-3.5 py-2 md:py-0 md:pb-3 flex-1 md:flex-none items-center md:items-stretch overflow-x-auto md:overflow-visible">
        {NAV_ITEMS.map((nav) => (
          <NavLink key={nav.key} to={nav.path} className={navLinkClass}>
            {nav.label}
          </NavLink>
        ))}
      </div>

      <div className="hidden md:flex md:flex-col border-t border-term-border px-3.5 py-2.5 text-xs text-term-muted mt-auto gap-2">
        <div className="text-term-green flex items-center">
          <StatusIndicator status="online" /> Connected
        </div>
        <div className="text-term-dim pl-3.5">/ {username || "support_agent"}</div>
        <button
          onClick={handleLogout}
          className="text-left text-term-cyan hover:text-term-green transition-colors mt-1 bg-transparent border-none p-0 cursor-pointer"
        >
          [L] Logout
        </button>
      </div>

      <button
        onClick={handleLogout}
        className="md:hidden text-term-cyan text-xs px-3 border-l border-term-border bg-transparent"
      >
        [L]
      </button>
    </div>
  );
}
