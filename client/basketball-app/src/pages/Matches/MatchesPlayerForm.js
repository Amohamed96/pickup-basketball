import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Matches.css";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default function MatchesPlayerForm() {
  const [matches, setMatches] = useState({
    user_id: null,
    challenger_id: null,
    team1_score: null,
    team2_score: null,
  });
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState("");

  const storeUserData = (e) => {
    console.log("EVENT TARGET +++ ", e.target.value);
    setMatches({ ...matches, [e.target.name]: e.target.value });
  };
  const handleMatchesPlayer = () => {
    console.log("MATCHES PLAYER FORM *********--", matches);
    axios.post("/api/matches", matches).then((result) => {
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
        <label for="tab-1" href="/login" className="tab">
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
                name="challenger_id"
                id="user"
                type="challenger_id"
                className="input"
                onChange={storeUserData}
              />
            </div>
            <div className="group">
              <label for="pass" className="label">
                user_id:
              </label>
              <input
                name="user_id"
                id="pass"
                type="user_id"
                className="input"
                data-type="user_id"
                onChange={storeUserData}
              />
            </div>
            <div className="group">
              <input id="check" type="checkbox" className="check" />
              <label for="check">
                <span className="icon"></span> Keep me Signed in
              </label>
            </div>
            <div className="group">Sign In</div>
            <div className="hr"></div>
            <div className="foot-lnk">
              <a href="#forgot">Forgot user_id?</a>
            </div>
          </div>
          <div className="sign-up-htm">
            <div className="group">
              <label for="user" className="label">
                Username
              </label>
              <input id="user" type="text" className="input" />
            </div>
            <div className="group">
              <label for="pass" className="label">
                user_id
              </label>
              <input
                id="pass"
                type="user_id"
                className="input"
                data-type="user_id"
              />
            </div>
            <div className="group">
              <label for="pass" className="label">
                Repeat user_id
              </label>
              <input
                id="pass"
                type="user_id"
                className="input"
                data-type="user_id"
              />
            </div>
            <div className="group">
              <label for="pass" className="label">
                challenger_id Address
              </label>
              <input id="pass" type="text" className="input" />
            </div>
            <div className="group">
              <input type="submit" className="button" value="Sign Up" />
            </div>
            <div className="hr"></div>
            <div className="foot-lnk">
              <label for="tab-1">Already Member?</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
