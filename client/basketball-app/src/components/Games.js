import React from "react";
import "./Styles/Games.scss";

export default function Games(props) {
  const { matchesTeam, teams } = props;

  const arrayMatchesTeam = Object.keys(matchesTeam).map((match) => {
    const teamOneName = matchesTeam[match].team1_name;
    const teamTwoName = matchesTeam[match].team2_name;
    console.log("MATCHES Team.DATE------>", matchesTeam[0].date);
    const winnerBanner = "--";
    if (teamOneName === matchesTeam[0].winner_name) {
    } else {
    }
    return (
      <div class="slide">
        {/* {matchesTeam[teamOneName].date} */}
        <img className="logo-team-bar" src={teamOneName.avatar} alt="" />
        <div class="slide">
          {teamOneName}--
          {matchesTeam[match].team1_score}
        </div>
        <img
          className="logo-team-bar"
          src={teams[teamTwoName - 1].avatar}
          alt=""
        />
        <div class="slide">
          {teams[teamTwoName - 1].team_name}--
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
