import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Matches.css";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default function MatchesTeamForm() {
  const [matches, setMatches] = useState({
    user_id: null,
    challenger_id: null,
    team1_score: null,
    team2_score: null,
  });
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState("");

  const storeUserData = (e) => {
    setMatches({ ...matches, [e.target.name]: e.target.value });
  };

  const handleMatchesTeam = () => {
    console.log("MATCHES TEAM FORM *********--", matches);
    axios.post("/api/users/matches", matches).then((result) => {
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
          Teams
        </label>
        <input id="tab-2" type="radio" name="tab" className="sign-up" />
        <label for="tab-2" className="tab">
          <a href="/matches-player">1 v 1</a>
        </label>
        <div className="login-form">
          <div className="sign-in-htm">
            <div className="group">
              <label for="user" className="label">
                Email:
              </label>
              <input
                name="email"
                id="user"
                type="email"
                className="input"
                onChange={storeUserData}
              />
            </div>
            <div className="group">
              <label for="pass" className="label">
                team1_id:
              </label>
              <input
                name="team1_id"
                id="pass"
                type="team1_id"
                className="input"
                data-type="team1_id"
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
              <a href="#forgot">Forgot team1_id?</a>
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
                team1_id
              </label>
              <input
                id="pass"
                type="team1_id"
                className="input"
                data-type="team1_id"
              />
            </div>
            <div className="group">
              <label for="pass" className="label">
                Repeat team1_id
              </label>
              <input
                id="pass"
                type="team1_id"
                className="input"
                data-type="team1_id"
              />
            </div>
            <div className="group">
              <label for="pass" className="label">
                Email Address
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
