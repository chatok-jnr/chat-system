import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setError("ERROR: username and password required");
      return;
    }
    setError("");
    login(username.trim());
    navigate("/chats", { replace: true });
  };

  return (
    <div className="w-full h-screen bg-term-bg flex items-center justify-center font-mono px-4">
      <div className="w-full max-w-sm border border-term-border">
        <div className="px-5 py-4 border-b border-term-border">
          <div className="text-term-green text-sm">&gt; authenticate</div>
          <div className="text-term-dim text-xs mt-2">SYSTEM: Support Console</div>
          <div className="text-term-dim text-xs">STATUS: awaiting credentials</div>
        </div>

        <form onSubmit={handleSubmit} className="px-5 py-4 space-y-4">
          <div>
            <label className="text-term-muted text-xs block mb-1" htmlFor="login-username">
              username:
            </label>
            <div className="flex items-center gap-2 px-3 py-2 bg-term-panel border border-term-border focus-within:border-term-green transition-colors">
              <span className="text-term-green">&gt;</span>
              <input
                id="login-username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="support_agent"
                autoComplete="username"
                className="flex-1 bg-transparent border-none outline-none text-term-text text-sm font-mono"
              />
            </div>
          </div>

          <div>
            <label className="text-term-muted text-xs block mb-1" htmlFor="login-password">
              password:
            </label>
            <div className="flex items-center gap-2 px-3 py-2 bg-term-panel border border-term-border focus-within:border-term-green transition-colors">
              <span className="text-term-green">&gt;</span>
              <input
                id="login-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                autoComplete="current-password"
                className="flex-1 bg-transparent border-none outline-none text-term-text text-sm font-mono"
              />
            </div>
          </div>

          {error && <div className="text-red-400 text-xs">{error}</div>}

          <button
            type="submit"
            className="w-full font-mono text-sm px-3.5 py-2 border border-term-border text-term-green hover:border-term-border-bright transition-colors"
          >
            [ LOGIN ]
          </button>
        </form>

        <div className="px-5 py-3 border-t border-term-border text-term-dim text-xs">
          SYSTEM: ready
        </div>
      </div>
    </div>
  );
}
