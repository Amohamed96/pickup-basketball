import React from 'react'
import './Styles/Games.scss'

export default function Games(props) {
  const {matches, teams} = props;

  console.log("matches GAMES: ", matches)
  console.log("teams GAMES: ", teams)

const arrayMatches = Object.keys(matches).map(match => {
  const teamOneID = matches[match].team1_id
  const teamTwoID = matches[match].team2_id

  return (
    <div class="slide">
      <img src={teams[teamOneID-1].avatar} height="100" width="250" alt="" />
      <img src={teams[teamTwoID-1].avatar} height="100" width="250" alt="" />
		</div>
  )
});
  return (
    <div class="slider">
      <div class="slide-track">
        {arrayMatches}
      </div>
    </div>
  )
}
