import { useEffect, useRef } from "react";
import Message from "./Message.jsx";

export default function MessageList({ messages }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 md:px-5 py-5">
      {messages.map((m) => (
        <Message key={m.id} msg={m} />
      ))}
    </div>
  );
}
