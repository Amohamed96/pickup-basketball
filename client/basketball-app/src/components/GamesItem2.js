import React from 'react'

export default function GamesItem(props) {
  const arrayMatches = Object.keys(matches).map(match => {

  const {matches, teams} = props;
  const teamTwoID = matches[match].team2_id
  return (
    <div>
      <img src={teams[teamTwoID-1].avatar} height="100" width="250" alt="" />
      TEAM 2
    </div>
  )
});
}
