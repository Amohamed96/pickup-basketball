import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./Messages.css";

export default function Messages() {
  return (
    <ChatEngine
      height="100vh"
      projectID="28515e67-5211-4871-82f6-cc1e9f8dfc9a"
      userName="3ptChamp"
      userSecret="12345"
    />
  );
}
