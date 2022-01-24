import React, { useState, useEffect } from "react";
import "./Styles/Leaderboard.css";
import { Redirect } from "react-router-dom";

export default function Leaderboard(props) {
  const [redirect, setRedirect] = useState("");
  const [user, setUser] = useState("");

  const { users, matchesPlayer, teams } = props;

  const getTeam = function (teamId) {
    //filter through array of teams
    //if the team_id = team id then return team object
    return (
      teams.find((team) => {
        if (teamId === team.id) return true;
      }) || {}
    );
  };
  const currentUser = localStorage.getItem("user");
  console.log(" USERS from LB", users);
  console.log("TEAMS  from LB", teams);
  console.log("MATCHES PLAYER from LB", matchesPlayer);

  useEffect(() => {
    setUser(JSON.parse(currentUser));
  }, [currentUser]);

  const goToPlayer = function () {
    setRedirect(`/player/${user.id}`);
  };

  const totalUserWins = function (player) {
    let userWins = 0;
    matchesPlayer.map((match) => {
      if (player.id === match.winner_id) {
        userWins++;
        console.log("player winner ID", player.id);
        console.log("match winner ID", match.winner_id);
        console.log("user wins", userWins);
      }
    });
    return userWins;
  };

  const totalUserLosses = function (player) {
    let userLosses = 0;
    matchesPlayer.map((match) => {
      if (
        (player.id !== match.winner_id && player.id === match.player1_id) ||
        player.id === match.player2_id
      ) {
        userLosses++;
      }
    });
    return userLosses;
  };

  return redirect ? (
    <Redirect to={redirect} />
  ) : (
    <div className="leaderboardContainer">
      <section class="content-info">
        <div class="container paddings-mini">
          <div class="row">
            <div class="col-lg-12">
              <table class="table-striped table-responsive table-hover result-point">
                <thead class="point-table-head">
                  <tr>
                    <th class="text-left">Rank</th>
                    <th class="text-left">Player</th>
                    <th class="text-center">Rating</th>
                    <th class="text-center">W</th>
                    <th class="text-center">L</th>
                    <th class="text-center">Team</th>
                  </tr>
                </thead>
                <tbody class="text-center">
                  {users.map((player) => (
                    <tr>
                      <td class="text-left number">
                        1<i class="fa fa-caret-up" aria-hidden="true"></i>
                      </td>
                      <td class="text-left" onClick={goToPlayer}>
                        <img src={player.avatar} alt="Profile Pic" />
                        <span>{player.name}</span>
                      </td>
                      <td>38</td>
                      <td>{totalUserWins(player)}</td>
                      <td>{totalUserLosses(player)}</td>
                      <td>
                        <img src={getTeam(player.team_id).avatar} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
