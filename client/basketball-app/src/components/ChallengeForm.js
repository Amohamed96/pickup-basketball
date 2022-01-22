import React, { useState, useEffect } from "react";
import "./Styles/LoginForm.css";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default function ChallengeForm() {
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
  const currentUser = localStorage.getItem("user");
  const storeUserData = (e) => {
    console.log("e TARGET VALUE", e.target.value);
    setChallenge({ ...challenge, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log("CURRENT USER from LOCAL", currentUser);

    setUser(JSON.parse(currentUser));
  }, [currentUser]);
  const handleChallenge = () => {
    // Promise with local storage and request

    // if (
    //   !challenger_id ||
    //   !user_id ||
    //   !location_id ||
    //   !date ||
    //   !challenge_message ||
    //   !requestStatus
    // ) {
    //   setError("Sorry, You must enter all data to continue");
    //   return;
    // }
    console.log("CHALLENGE *********--", challenge);
    const headers = { "Content-Type": "application/json" };
    axios
      .post(
        `/api/users/player/${user.id}`,
        challenge,
        // {
        //   challenger_id: 2,
        //   user_id: 4,
        //   location_id: 1,
        //   date: null,
        //   challenge_message: "LB TO AWAB",
        //   request_status: null,
        // },
        { headers: headers }
      )
      .then((result) => {
        console.log("RESULTS DATA CHALLENGE FORM>>", result.data);
        console.log("CHALLENGE FORM----->", challenge);
        setChallenge(result.data);
        // localStorage.setItem("user", JSON.stringify(result.data));
        // setRedirect("/profile");
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
        <div>
          <input
            type="text"
            name="user_id"
            placeholder="Who do you want to Challenge"
            onChange={storeUserData}
          ></input>
        </div>
        <div>
          <input
            type="text"
            name="challenger_id"
            placeholder="Who are you"
            onChange={storeUserData}
          ></input>
        </div>
        <button type="submit" onClick={handleChallenge}>
          SEND CHALLENGE
        </button>
        {/* </form> */}
      </div>
    </div>
  );
}
