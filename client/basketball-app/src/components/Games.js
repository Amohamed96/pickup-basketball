import React from "react";
import "./Styles/Games.scss";

export default function Games(props) {
  const { matchesPlayer, users } = props;

  const arrayMatchesPlayer = Object.keys(matchesPlayer).map((match) => {
    const playerOneID = matchesPlayer[match].player1_id;
    const playerTwoID = matchesPlayer[match].player2_id;
    if (users[playerOneID - 1].id === matchesPlayer[0].winner_id) {
    } else {
    }
    return (
      <div class="slide">
        {/* {matchesPlayer[teamOneID].date} */}
        <img
          className="logo-team-bar"
          src={users[playerOneID - 1].avatar}
          alt=""
        />
        <div class="slide">
          {users[playerOneID - 1].name}--
          {matchesPlayer[match].player1_score}
        </div>
        <img
          className="logo-team-bar"
          src={users[playerTwoID - 1].avatar}
          alt=""
        />
        <div class="slide">
          {users[playerTwoID - 1].name}--
          {matchesPlayer[match].player2_score}
        </div>
      </div>
    );
  });
  return (
    <div class="slider">
      <div class="slide-track">{arrayMatchesPlayer}</div>
    </div>
  );
}
