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
    requestStatus: null,
  });
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState("");
  const [message, setMessage] = useState("");
  const [location, setLocation] = useState("");

  const handleChallenge = () => {
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

    axios
      .post("http://localhost:3001/api/users/profile/2", challenge)
      .then((result) => {
        console.log("RESULTS CHALLENGE FORM>>", result.data);
        console.log("CHALLENGE FORM----->", challenge);
        // setChallenge(result.data);
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
          <input type="text" placeholder="Message"></input>
        </div>
        <div>
          <input type="text" placeholder="Location"></input>
        </div>
        <button onClick={handleChallenge}>SEND CHALLENGE</button>
        {/* </form> */}
      </div>
    </div>
  );
}
