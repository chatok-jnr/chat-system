import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";

export default function AppShell() {
  return (
    <div className="w-full h-screen bg-term-bg flex flex-col md:flex-row overflow-hidden font-mono">
      <Sidebar />
      <main className="flex-1 min-w-0 min-h-0 flex flex-col bg-term-bg overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
}
