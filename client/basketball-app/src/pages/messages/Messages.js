import React, { useState, useEffect } from "react";
import { ChatEngine, ChatFeed } from "react-chat-engine";
import "./Messages.css";
export default function Messages() {
  const [message, setMessage] = useState([]);
  // const [user, setUser] = useState({});

  const user = JSON.parse(localStorage.getItem("user"));
  console.log("CURRENT USER from LOCAL", user);

  return (
    <>
      <ChatEngine
        height="100vh"
        projectID="3fbd0f91-4a93-4897-8e55-06d72646a735"
        userName={user.name}
        userSecret={user.secret}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={(chatId, message) =>
          console.log("DATA>", chatId, message)
        }
      />
    </>
  );
}
