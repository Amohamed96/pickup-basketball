import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Matches.scss";
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
      setRedirect(`/matches-player`);
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
            <button
              className="button-2"
              onClick={() => setCountOne(countOne + 2)}
            >
              +2
            </button>
          </div>
          <div class="form-1">
            <div class="input-container ic1">
              <div class="cut"></div>
              <label for="firstname" class="placeholder">
                Player 1
              </label>
            </div>
            <div class="input-container ic2">
              <input
                type="text"
                name="player1_id"
                onChange={storeUserDataOne}
                class="input"
                placeholder=" "
              />
            </div>
            <button type="text" class="submit" onClick={playerOneScore}>
              Log Score
            </button>
          </div>
        </div>
        {/* <div className="score-form">
          <input
            name="player1_id"
            placeholder="Player 1"
            className="player-input"
            onChange={storeUserDataOne}
          ></input>
        </div>
        <span> .</span>
        <span> .</span>
        <span> .</span>
        <button
          name="player1_score"
          type="button"
          className="button-form"
          onClick={playerOneScore}
        >
          Log Player 1 Final Score
        </button> */}
        <div className="team-container">
          <div className="count-score">{countTwo}</div>
          <div className="button-wrapper">
            <button onClick={() => setCountTwo(countTwo - 1)}>-</button>
            <button onClick={() => setCountTwo(countTwo + 1)}>+</button>
            <button
              className="button-2"
              onClick={() => setCountTwo(countTwo + 2)}
            >
              +2
            </button>
          </div>
          <div class="form-1">
            <div class="input-container ic1">
              <div class="cut"></div>
              <label for="firstname" class="placeholder">
                Player 2
              </label>
            </div>
            <div class="input-container ic2">
              <input
                type="text"
                name="player2_id"
                onChange={storeUserDataTwo}
                class="input"
                placeholder=" "
              />
            </div>
            <button type="text" class="submit" onClick={playerTwoScore}>
              Log Score
            </button>
          </div>
        </div>
        {/* <div className="score-form">
          <input
            name="player2_id"
            placeholder="Player 2"
            onChange={storeUserDataTwo}
          ></input>
        </div>
        <span> .</span>
        <span> .</span>
        <span> .</span>

        <button
          name="player2_score"
          type="button"
          placeholder="Winner"
          className="button-form"
          onClick={playerTwoScore}
        >
          Log Player 2 Final Score
        </button> */}
      </div>
      {/* <input
        name="winner_id"
        className="player-input"
        placeholder="Winner"
        onChange={storeUserDataThree}
      ></input> */}
      <div class="form-1">
        <div class="input-container ic2">
          <input
            type="text"
            name="winner_id"
            onChange={storeUserDataThree}
            class="input"
            placeholder="Winner"
          />
        </div>
        <button type="text" class="submit" onClick={handleMatchesPlayer}>
          Submit
        </button>
        {/* <input
          type="submit"
          className="button-form"
          value="SUBMIT"
          onClick={handleMatchesPlayer}
        ></input> */}
      </div>
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
