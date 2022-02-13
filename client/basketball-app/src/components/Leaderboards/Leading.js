import React, { useState, useEffect } from "react";
import "../Styles/Leading.css";
export default function (props) {
  const [user, setUser] = useState("");
  const { users, matchesPlayer, matchesTeam, teams } = props;
  console.log("USERS FROM LEADING----->", users);

  return (
    <div className="card-contain">
      <div class="ui card">
        <div class="image">
          <img src="https://www.nicepng.com/png/detail/19-196711_lebron-james-png-transparent-image-lebron-james-cavs.png" />
        </div>
        <div class="content">
          <a class="header">LeJron Bames</a>
          <div class="meta">
            <span class="date">All-time Leading Scorer </span>
          </div>
          <div class="">
            LeJron, who plays for the Scarborough Nets has passed Awab in the
            All-time Leading Scorers list.
          </div>
        </div>
        <div class="extra content">
          <a>
            <i class="basketball ball icon"></i>
            12,438 Total Points
          </a>
        </div>
      </div>
    </div>
  );
}
