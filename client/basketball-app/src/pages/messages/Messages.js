import React, { useEffect, useState } from "react";
import "./Messages.css";
import Navbar from "../../components/Navbar"; 

export default function Messages() {
  const [user, setUser] = useState({})
  
  useEffect(() => {
    const currentUser = localStorage.getItem('user');
    setUser(JSON.parse(currentUser))
  }, [])

  return (
    <>
    <Navbar users={user}/>
      <div className="messages">
      <div className="chatbox">Chat</div>
      <div className="menu"> Welcome {user.name}, I bet you're wondering who's online? </div>
      </div>
    </> 
  );
}
