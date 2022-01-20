import React from 'react'

export default function GamesItem(props) {
  const {matches, teams} = props;
  const teamOneID = matches[match].team1_id
  return (
    <div>
      <img src={teams[teamOneID-1].avatar} height="100" width="250" alt="" />
      TEAM 1
    </div>
  )
}
