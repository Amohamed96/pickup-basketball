import React, { useEffect, useState } from "react";
import { ChatEngine } from "react-chat-engine";
import "./Messages.css";
import Navbar from "../../components/Navbar";

function Messages() {
  // const [user, setUser] = useState({});

  // useEffect(() => {
  //   const currentUser = localStorage.getItem("user");
  //   setUser(JSON.parse(currentUser));
  // }, []);

  return (
    <ChatEngine
      height="100vh"
      projectID="28515e67-5211-4871-82f6-cc1e9f8dfc9a"
      userName="3ptChamp"
      userSecret="12345"
    />
  );
}
export default Messages;
