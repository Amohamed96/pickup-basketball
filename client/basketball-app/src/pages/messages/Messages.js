import React, { useState } from "react";
import { ChatEngine, ChatFeed } from "react-chat-engine";
// import "./Messages.css";
import Chatfeed from "../../components/MessageComponents/Chatfeed";

export default function Messages() {
  const [message, setMessage] = useState([]);
  return (
    <ChatEngine
      height="100vh"
      projectID="28515e67-5211-4871-82f6-cc1e9f8dfc9a"
      userName="THEREALGOAT"
      userSecret="12345"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={(chatId, message) => console.log("DATA>", chatId, message)}
    />
  );
}
