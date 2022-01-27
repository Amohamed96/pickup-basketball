import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Matches.css";
import axios from "axios";
import { Redirect } from "react-router-dom";
import DropdownPlayers from "../../components/DropdownPlayers";
// import { Scoreboard } from "../../components/Scoreboard";
import "./../../components/Styles/Scoreboard.scss";
import Timer from "./../../components/Timer";
import "./../../components/Styles/Timer.css";

export default function MatchesPlayerForm(props) {
  const { users, matchesPlayer, matchesTeam, teams } = props;
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const [matches, setMatches] = useState({
    player1_id: null,
    player2_id: null,
    player1_score: null,
    player2_score: null,
    winner_id: null,
  });
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState("");

  const storeUserDataOne = (e) => {
    console.log("EVENT TARGET +++ ", e.target.value);
    const playerId = users.filter((player) => {
      return player.name === e.target.value;
    });
    setMatches({ ...matches, player1_id: playerId[0].id });
  };
  const storeUserDataTwo = (e) => {
    console.log("EVENT TARGET +++ ", e.target.value);
    const playerIdTwo = users.filter((player) => {
      return player.name === e.target.value;
    });
    setMatches({ ...matches, player2_id: playerIdTwo[0].id });
  };
  const storeUserDataThree = (e) => {
    console.log("EVENT TARGET +++ ", e.target.value);
    const playerIdThree = users.filter((player) => {
      return player.name === e.target.value;
    });
    setMatches({ ...matches, winner_id: playerIdThree[0].id });
  };
  const handleMatchesPlayer = () => {
    console.log("MATCHES PLAYER FORM *********--", matches);
    axios.post("/api/matches/player", matches).then((result) => {
      setMatches(result.data.matches);
      setRedirect(`/`);
    });
  };

  const players = users.map((player) => {
    return player.name;
  });

  const playerOneScore = function () {
    setMatches({ ...matches, player1_score: countOne });
  };
  const playerTwoScore = function () {
    setMatches({ ...matches, player2_score: countTwo });
  };

  return redirect ? (
    <Redirect to={redirect} />
  ) : (
    <div className="scoreboard-container">
      <div className="timer-container">
        <Timer />
      </div>
      <div className="score-container">
        <div className="team-container">
          <div className="count-score">{countOne}</div>
          <div className="button-wrapper">
            <button onClick={() => setCountOne(countOne - 1)}>-</button>
            <button onClick={() => setCountOne(countOne + 1)}>+</button>
            <button onClick={() => setCountOne(countOne + 2)}>+2</button>
          </div>
          <input
            name="player1_id"
            placeholder="Player 1"
            className="player-input"
            onChange={storeUserDataOne}
          ></input>
          <button
            name="player1_score"
            type="submit"
            className="player-input"
            onClick={playerOneScore}
          >
            {" "}
            Log Player 1 Final Score
          </button>
        </div>
        <div className="team-container">
          <div className="count-score">{countTwo}</div>
          <div className="button-wrapper">
            <button onClick={() => setCountTwo(countTwo - 1)}>-</button>
            <button onClick={() => setCountTwo(countTwo + 1)}>+</button>
            <button onClick={() => setCountTwo(countTwo + 2)}>+2</button>
          </div>
          <input
            name="player2_id"
            placeholder="Player 2"
            className="player-input"
            onChange={storeUserDataTwo}
          ></input>
          <button
            name="player2_score"
            type="submit"
            className="player-input"
            placeholder="Winner"
            onClick={playerTwoScore}
          >
            Log Player 2 Final Score
          </button>
        </div>
      </div>
      <input
        name="winner_id"
        className="player-input"
        placeholder="Winner"
        onChange={storeUserDataThree}
      ></input>
      <input
        type="submit"
        className="button"
        value="SUBMIT"
        onClick={handleMatchesPlayer}
      ></input>
    </div>
  );
}
/*

    <div className="login-wrap">
      <span>{error}</span>
      <div className="login-html">
        <input id="tab-1" type="radio" name="tab" className="sign-in" checked />
        <label for="tab-1" href="/matches-player" className="tab">
          1 v 1
        </label>
        <input id="tab-2" type="radio" name="tab" className="sign-up" />
        <label for="tab-2" href="/matches-teams" className="tab">
          <a href="/matches-team">Teams</a>
        </label>
        <div className="login-form">
          <div className="sign-in-htm">
            <div className="group">
              <label for="user" className="label">
                challenger_id:
              </label>
              <DropdownPlayers users={users} />

              <input
                name="player1_id"
                id="user"
                type="challenger_id"
                className="input"
                placeholder="Challenger"
                onChange={storeUserDataOne}
              />
            </div>
            <div className="group">
              <label for="pass" className="label">
                user_id:
              </label>
              <DropdownPlayers users={users} />
              <input
                name="player2_id"
                id="pass"
                type="user_id"
                className="input"
                placeholder="Who are you challenging?"
                data-type="user_id"
                onChange={storeUserDataTwo}
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
                onChange={storeUserDataThree}
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
      </div>  */
