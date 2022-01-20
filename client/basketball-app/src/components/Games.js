import React from 'react'
import './Styles/Games.scss'

export default function Games(props) {
  const {matches, teams} = props;



const arrayMatches = Object.keys(matches).map(match => {
  const teamOneID = matches[match].team1_id
  const teamTwoID = matches[match].team2_id
  console.log("MATCHES.DATE------>", matches[0].date)
  return (
    <div class="slide">
      {matches[teamOneID].date}
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
