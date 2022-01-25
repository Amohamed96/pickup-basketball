import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Matches.css";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default function MatchesPlayerForm() {
  const [matches, setMatches] = useState({
    team1_name: null,
    team2_name: null,
    team1_score: null,
    team2_score: null,
    winner_name: null,
  });
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState("");

  const storeUserData = (e) => {
    console.log("EVENT TARGET +++ ", e.target.value);
    setMatches({ ...matches, [e.target.name]: e.target.value });
  };
  const handleMatchesPlayer = () => {
    console.log("MATCHES PLAYER FORM *********--", matches);
    axios.post("/api/matches/team", matches).then((result) => {
      console.log("RESULTS>>", result.data.matches);
      setMatches(result.data.matches);
      setRedirect(`/profile`);
    });
  };

  return redirect ? (
    <Redirect to={redirect} />
  ) : (
    <div className="login-wrap">
      <span>{error}</span>
      <div className="login-html">
        <input id="tab-1" type="radio" name="tab" className="sign-in" />
        <label for="tab-1" href="/matches-player" className="tab">
          <a href="/matches-player">1 V 1</a>
        </label>
        <input id="tab-2" type="radio" name="tab" className="sign-up" checked />
        <label for="tab-2" href="/matches-teams" className="tab">
          Teams
        </label>
        <div className="login-form">
          <div className="sign-up-htm">
            <div className="group">
              <label for="user" className="label">
                Team 1
              </label>
              <input
                name="team1_name"
                id="user"
                type="challenger_id"
                className="input"
                placeholder="Your Team"
                onChange={storeUserData}
              />
            </div>
            <div className="group">
              <label for="pass" className="label">
                Team 2
              </label>
              <input
                name="team2_name"
                id="pass"
                type="user_id"
                className="input"
                placeholder="Which team are you challenging?"
                data-type="user_id"
                onChange={storeUserData}
              />
              <input
                name="team1_score"
                id="pass"
                type="user_id"
                className="input"
                placeholder="Team 1 score"
                data-type="user_id"
                onChange={storeUserData}
              />
              <input
                name="team2_score"
                id="pass"
                type="user_id"
                className="input"
                placeholder="Team 2 score"
                data-type="user_id"
                onChange={storeUserData}
              />
              <input
                name="winner_name"
                id="pass"
                type="user_id"
                className="input"
                placeholder="Who Won?"
                data-type="user_id"
                onChange={storeUserData}
              />
            </div>
            <div className="group">
              <input
                type="submit"
                className="button"
                value="SUBMIT"
                onClick={handleMatchesPlayer}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
