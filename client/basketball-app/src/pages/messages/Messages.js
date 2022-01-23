import React, { useState, useEffect } from "react";
import { ChatEngine, ChatFeed } from "react-chat-engine";
import "./Messages.css";
import Chatfeed from "../../components/MessageComponents/Chatfeed";

export default function Messages() {
  const [message, setMessage] = useState([]);
  const [user, setUser] = useState({});
  const currentUser = localStorage.getItem("user");
  useEffect(() => {
    console.log("CURRENT USER from LOCAL", currentUser);
    setUser(JSON.parse(currentUser));
    console.log(" USER from LOCAL", user);
  }, []);
  return (
    <ChatEngine
      height="100vh"
      projectID="3fbd0f91-4a93-4897-8e55-06d72646a735"
      userName="THEREALGOAT"
      userSecret="12345"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={(chatId, message) => console.log("DATA>", chatId, message)}
    />
  );
}
