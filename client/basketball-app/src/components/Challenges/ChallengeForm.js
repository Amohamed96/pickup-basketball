import React, { useState, useEffect } from "react";
import "../Styles/ChallengeForm.css";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default function ChallengeForm(props) {
  const { player, location } = props;
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

  const storeUserData = (e) => {
    setChallenge({ ...challenge, [e.target.name]: e.target.value });
  };
  const storeUserDataLocation = (e) => {
    const locationId = location.filter((locationFiltered) => {
      console.log("location cf", location);

      return locationFiltered.court === e.target.value;
    });
    setChallenge({ ...challenge, location_id: locationId[0].id });
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
    setRedirect("/");
  };

  return redirect ? (
    <Redirect to={redirect} />
  ) : (
    <div class="form">
      <div class="title">Challenge this player</div>
      <div class="subtitle">Bring your A game!</div>
      <div class="input-container ic1">
        <input
          name="challenge_message"
          onChange={storeUserData}
          class="input"
          type="text"
          placeholder=" "
        />
        <div class="cut"></div>
        <label for="firstname" class="placeholder">
          Message
        </label>
      </div>
      <div class="input-container ic2">
        <input
          type="text"
          name="location_id"
          onChange={storeUserDataLocation}
          class="input"
          placeholder=" "
        />
        <div class="cut"></div>
        <label for="email" class="placeholder">
          Court Name
        </label>
      </div>
      <button type="text" class="submit" onClick={handleChallenge}>
        submit
      </button>
    </div>
  );
}
