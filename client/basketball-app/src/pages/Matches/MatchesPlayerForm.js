import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Matches.css";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default function MatchesPlayerForm() {
  const [matches, setMatches] = useState({
    player1_id: null,
    player2_id: null,
    player1_score: null,
    player2_score: null,
    winner_id: null,
  });
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState("");

  const storeUserData = (e) => {
    console.log("EVENT TARGET +++ ", e.target.value);
    setMatches({ ...matches, [e.target.name]: e.target.value });
  };
  const handleMatchesPlayer = () => {
    console.log("MATCHES PLAYER FORM *********--", matches);
    axios.post("/api/matches/player", matches).then((result) => {
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
        <input id="tab-1" type="radio" name="tab" className="sign-in" checked />
        <label for="tab-1" href="/matches-player" className="tab">
          1 v 1
        </label>
        <input id="tab-2" type="radio" name="tab" className="sign-up" />
        <label for="tab-2" className="tab">
          <a href="/matches-team">Teams</a>
        </label>
        <div className="login-form">
          <div className="sign-in-htm">
            <div className="group">
              <label for="user" className="label">
                challenger_id:
              </label>
              <input
                name="player1_id"
                id="user"
                type="challenger_id"
                className="input"
                placeholder="Challenger"
                onChange={storeUserData}
              />
            </div>
            <div className="group">
              <label for="pass" className="label">
                user_id:
              </label>
              <input
                name="player2_id"
                id="pass"
                type="user_id"
                className="input"
                placeholder="Who are you challenging?"
                data-type="user_id"
                onChange={storeUserData}
              />
              <input
                name="player1_score"
                id="pass"
                type="user_id"
                className="input"
                placeholder="Team 1 score"
                data-type="user_id"
                onChange={storeUserData}
              />
              <input
                name="player2_score"
                id="pass"
                type="user_id"
                className="input"
                placeholder="Team 2 score"
                data-type="user_id"
                onChange={storeUserData}
              />
              <input
                name="winner_id"
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
