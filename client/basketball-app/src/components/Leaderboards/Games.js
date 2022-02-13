import React from "react";
import "../Styles/Games.scss";

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
        <div className="scores-game">
          <div className="date-games">
            {" "}
            {matchesPlayer[match].date.substr(0, 10)}
          </div>
          <img
            className="logo-team-bar"
            src={users[playerOneID - 1].avatar}
            alt=""
          />
          <div class="slide-1">
            {users[playerOneID - 1].name}
            <span> - </span>
            {matchesPlayer[match].player1_score}
          </div>
          <img
            className="logo-team-bar"
            src={users[playerTwoID - 1].avatar}
            alt=""
          />
          <div class="slide-1">
            {users[playerTwoID - 1].name}
            <span> - </span>
            {matchesPlayer[match].player2_score}
          </div>
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
