import React from "react";
import "./Styles/Games.scss";

export default function Games(props) {
  const { matchesTeam, teams } = props;

  const arrayMatchesTeam = Object.keys(matchesTeam).map((match) => {
    const teamOneID = matchesTeam[match].team1_id;
    const teamTwoID = matchesTeam[match].team2_id;
    console.log("MATCHES Team.DATE------>", matchesTeam[0].date);
    const winnerBanner = "--";
    if (teams[teamOneID - 1].id === matchesTeam[0].winner_id) {
    } else {
    }
    return (
      <div class="slide">
        {/* {matchesTeam[teamOneID].date} */}
        <img
          className="logo-team-bar"
          src={teams[teamOneID - 1].avatar}
          alt=""
        />
        <div class="slide">
          {teams[teamOneID - 1].team_name}--
          {matchesTeam[match].team1_score}
        </div>
        <img
          className="logo-team-bar"
          src={teams[teamTwoID - 1].avatar}
          alt=""
        />
        <div class="slide">
          {teams[teamTwoID - 1].team_name}--
          {matchesTeam[match].team2_score}
        </div>
      </div>
    );
  });
  return (
    <div class="slider">
      <div class="slide-track">{arrayMatchesTeam}</div>
    </div>
  );
}
