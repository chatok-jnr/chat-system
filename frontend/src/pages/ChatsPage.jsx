import { useState, useEffect } from "react";
import ChatList from "../components/ChatList.jsx";
import ChatHeader from "../components/ChatHeader.jsx";
import MessageList from "../components/MessageList.jsx";
import MessageComposer from "../components/MessageComposer.jsx";
import { USERS, MOCK_MESSAGES } from "../data/mockData.js";

// Only users with an existing thread appear in the Chats list.
const CHAT_USERS = USERS.filter((u) => MOCK_MESSAGES[u.id]);

export default function ChatsPage() {
  const [selectedId, setSelectedId] = useState(CHAT_USERS[0].id);
  const [mobileView, setMobileView] = useState("list");
  const [isMobile, setIsMobile] = useState(false);
  const [messages, setMessages] = useState(MOCK_MESSAGES);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const selectedUser = CHAT_USERS.find((u) => u.id === selectedId);

  const handleSelect = (id) => {
    setSelectedId(id);
    if (isMobile) setMobileView("chat");
  };

  const handleSend = (text) => {
    const now = new Date();
    const time = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
    const newId = `local-${Date.now()}`;
    const threadId = selectedId;

    setMessages((prev) => ({
      ...prev,
      [threadId]: [
        ...prev[threadId],
        { id: newId, from: "me", user: "You", time, text, status: "sent" },
      ],
    }));

    const setStatus = (status) => {
      setMessages((prev) => ({
        ...prev,
        [threadId]: prev[threadId].map((m) => (m.id === newId ? { ...m, status } : m)),
      }));
    };

    // Mock delivery/read receipts — frontend-only, no backend involved.
    setTimeout(() => setStatus("delivered"), 1200);
    setTimeout(() => setStatus("seen"), 3000);
  };

  const showList = !isMobile || mobileView === "list";
  const showChat = !isMobile || mobileView === "chat";

  return (
    <div className="flex-1 flex min-w-0 min-h-0">
      {showList && (
        <div className="w-full md:w-[280px] md:min-w-[280px] h-full bg-term-bg2 border-r border-term-border flex flex-col">
          <ChatList users={CHAT_USERS} selectedId={selectedId} onSelect={handleSelect} />
        </div>
      )}

      {showChat && selectedUser && (
        <div className="flex-1 flex flex-col min-w-0 bg-term-bg">
          <ChatHeader user={selectedUser} onBack={isMobile ? () => setMobileView("list") : null} />
          <MessageList messages={messages[selectedId]} />
          <MessageComposer onSend={handleSend} />
        </div>
      )}
    </div>
  );
}
