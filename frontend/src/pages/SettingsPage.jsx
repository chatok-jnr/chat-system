import { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import TerminalCheckbox from "../components/TerminalCheckbox.jsx";

export default function SettingsPage() {
  const { username } = useAuth();
  const [desktopNotifications, setDesktopNotifications] = useState(true);
  const [soundNotifications, setSoundNotifications] = useState(true);
  const [compactMessages, setCompactMessages] = useState(false);

  return (
    <div className="flex-1 overflow-y-auto p-5 md:p-6">
      <div className="text-term-green text-sm mb-6">&gt; settings</div>

      <div className="max-w-md space-y-7">
        <Section title="GENERAL">
          <TerminalCheckbox
            label="Desktop notifications"
            checked={desktopNotifications}
            onChange={setDesktopNotifications}
          />
          <TerminalCheckbox
            label="Sound notifications"
            checked={soundNotifications}
            onChange={setSoundNotifications}
          />
          <TerminalCheckbox
            label="Compact messages"
            checked={compactMessages}
            onChange={setCompactMessages}
          />
        </Section>

        <Section title="APPEARANCE">
          <SettingRow label="Theme" value="DARK" />
          <SettingRow label="Accent" value="GREEN" />
        </Section>

        <Section title="ACCOUNT">
          <SettingRow label="Username" value={username || "support_agent"} />
          <SettingRow label="Email" value="support@example.com" />
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <div className="text-term-muted text-xs tracking-wider mb-2">{title}</div>
      <div className="border-t border-term-border pt-3 space-y-3">{children}</div>
    </div>
  );
}

function SettingRow({ label, value }) {
  return (
    <div>
      <div className="text-term-dim text-xs mb-1">{label}</div>
      <div className="text-term-cyan text-sm">&gt; {value}</div>
    </div>
  );
}
