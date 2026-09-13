import MessageStatus from "./MessageStatus.jsx";

export default function Message({ msg }) {
  const isMe = msg.from === "me";
  const displayName = isMe ? "YOU" : msg.user;

  return (
    <div className="mb-5 text-sm leading-relaxed">
      <div className="flex items-center justify-between gap-3 text-term-dim">
        <div>
          [{msg.time}]{"  "}
          <span className={isMe ? "text-term-cyan" : "text-term-green"}>
            &lt; {displayName} &gt;
          </span>
        </div>
        {isMe && <MessageStatus status={msg.status} />}
      </div>
      <div className="text-term-text pl-2 mt-0.5">{msg.text}</div>
    </div>
  );
}
