import React, { useState, useEffect } from "react";

export default function (props) {
  const [user, setUser] = useState("");
  const { users, matchesPlayer, matchesTeam, teams } = props;
  console.log("USERS FROM LEADING----->", users);
  return (
    <div>
      <div class="ui card">
        <div class="image">
          <img src={users.avatar} />
        </div>
        <div class="content">
          <a class="header">Abdi</a>
          <div class="meta">
            <span class="date">Joined in 2013</span>
          </div>
          <div class="">Kristy is an art director living in New York.</div>
        </div>
        <div class="extra content">
          <a>
            <i class="user icon"></i>
            22 Friends
          </a>
        </div>
      </div>
    </div>
  );
}
