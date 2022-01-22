import React from "react";
import "./Styles/Games.scss";

export default function Games(props) {
  const { matches, teams } = props;

  const arrayMatches = Object.keys(matches).map((match) => {
    const teamOneID = matches[match].team1_id;
    const teamTwoID = matches[match].team2_id;
    console.log("MATCHES.DATE------>", matches[0].date);
    const winnerBanner = "--";
    if (teams[teamOneID - 1].id === matches[0].winner_id) {
    } else {
    }
    return (
      <div class="slide">
        {/* {matches[teamOneID].date} */}
        <img
          className="logo-team-bar"
          src={teams[teamOneID - 1].avatar}
          alt=""
        />
        <div class="slide">
          {teams[teamOneID - 1].team_name}--
          {matches[match].team1_score}
        </div>
        <img
          className="logo-team-bar"
          src={teams[teamTwoID - 1].avatar}
          alt=""
        />
        <div class="slide">
          {teams[teamTwoID - 1].team_name}--
          {matches[match].team2_score}
        </div>
      </div>
    );
  });
  return (
    <div class="slider">
      <div class="slide-track">{arrayMatches}</div>
    </div>
  );
}
