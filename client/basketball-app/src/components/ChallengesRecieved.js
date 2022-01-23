import React, { useState, useEffect } from "react";
import axios from "axios";
export default function ChallengesRecieved(props) {
  const { users, challenges } = props;
  const [error, setError] = useState("");
  const [user, setUser] = useState("");
  const currentUser = localStorage.getItem("user");

  const handleStatus = (challenge, newStatus) => {
    console.log("CHALLENGE *********--", challenge);
    const headers = { "Content-Type": "application/json" };
    axios
      .put(
        `/api/users/player/${challenge.user_id}`,
        {
          request_status: newStatus,
          user_id: challenge.user_id,
          challenge_request_id: challenge.id,
        },
        {
          headers: headers,
        }
      )
      .then((result) => {
        // localStorage.setItem("user", JSON.stringify(result.data));
        // setRedirect("/profile");
      })

      .catch((err) => {
        console.log("errrrr", err);
        setError("ERROR");
      });
  };
  console.log("USERS CH===>", users);
  console.log("USERS CH===>", users);
  console.log("USERS CH===>", users);

  return challenges.map((challenge) => {
    return (
      <div>
        {/* {users[1].name} */}
        {challenge.challenge_message}
        {challenge.challenge_message}
        <button onClick={() => handleStatus(challenge, true)}>ACCEPT</button>
        <button onClick={() => handleStatus(challenge, false)}>DECLINE</button>
      </div>
    );
  });
}
