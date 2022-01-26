import React, { useState, useEffect } from "react";
import "./Styles/LoginForm.css";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default function ChallengeForm(props) {
  const { player } = props;
  const [challenge, setChallenge] = useState({
    challenger_id: null,
    user_id: null,
    location_id: null,
    date: null,
    challenge_message: null,
    request_status: null,
  });
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState("");
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");
  const [location, setLocation] = useState("");
  const storeUserData = (e) => {
    console.log("e TARGET VALUE", e.target.value);
    setChallenge({ ...challenge, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    const currentUser = localStorage.getItem("user");
    const parsedUser = JSON.parse(currentUser);
    setUser(parsedUser);
    console.log("P ID", player.id);
    setChallenge({
      ...challenge,
      challenger_id: parsedUser.id,
      user_id: player.id,
      date: new Date().toLocaleDateString("en-CA"),
    });
  }, [player]);
  const handleChallenge = () => {
    const headers = { "Content-Type": "application/json" };
    console.log("challenge form!!!!", challenge);
    axios
      .post(`/api/users/player/${user.id}`, challenge, { headers: headers })
      .then((result) => {
        setChallenge(result.data);
      })

      .catch((err) => {
        console.log("errrrr", err);
        setError("ERROR");
      });
  };

  return redirect ? (
    <Redirect to={redirect} />
  ) : (
    <div className="login-wrap">
      <div className="login-html">
        {/* <a href="/">Challenge</a> */}
        {/* <form> */}
        <div>
          <input
            type="text"
            name="challenge_message"
            placeholder="Message"
            onChange={storeUserData}
          ></input>
        </div>
        <div>
          <input
            type="text"
            name="location_id"
            placeholder="Location"
            onChange={storeUserData}
          ></input>
        </div>
        {/* <div>
          <input
            type="text"
            name="user_id"
            placeholder="Who do you want to Challenge"
            onChange={storeUserData}
          ></input>
        </div>
        <div>
          <input
            type="hidden"
            name="challenger_id"
            placeholder="Who are you"
            value={user.id}
          ></input>
        </div> */}
        <button type="submit" onClick={handleChallenge}>
          SEND CHALLENGE
        </button>
        {/* </form> */}
      </div>
    </div>
  );
}
