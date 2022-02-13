import React, { useState, useEffect } from "react";
import "../Styles/Leaderboard.css";
import { Redirect } from "react-router-dom";
import Leading from "./Leading";

export default function Leaderboard(props) {
  const [redirect, setRedirect] = useState("");
  const [user, setUser] = useState("");
  const [totalPoints, setTotalPoints] = useState(0);

  const { users, matchesPlayer, matchesTeam, teams } = props;

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

  useEffect(() => {
    setUser(JSON.parse(currentUser));
  }, [currentUser]);

  const goToPlayer = function (playerId) {
    return setRedirect(`/player/${playerId}`);
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
        player.id !== match.winner_id &&
        (player.id === match.player1_id || player.id === match.player2_id)
      ) {
        userLosses++;
      }
    });
    return userLosses;
  };

  const totalTeamWins = function (team) {
    let teamWins = 0;
    matchesTeam.map((match) => {
      if (team.id === match.winner_id) {
        teamWins++;
      }
    });
    return teamWins;
  };

  const totalTeamLosses = function (team) {
    let teamLosses = 0;
    matchesTeam.map((match) => {
      if (
        team.id !== match.winner_id &&
        (team.id === match.team1_id || team.id === match.team2_id)
      ) {
        teamLosses++;
      }
    });
    return teamLosses;
  };
  let rating = 0;
  const playerRating = function (player) {
    teams.map(
      (team) =>
        (rating =
          50 +
          (totalUserWins(player) /
            (totalUserWins(player) + totalUserLosses(player))) *
            41)
    );

    return Math.floor(rating);
  };

  const mappedUsers = users
    .map((player) => {
      const mapPD = { ...player };
      mapPD.rating = playerRating(player);
      mapPD.totalWins = totalUserWins(player);
      mapPD.totalLosses = totalUserLosses(player);
      mapPD.avatar = player.avatar;

      return mapPD;
    })
    .sort((prev, next) => {
      return next.rating - prev.rating;
    });
  const mappedTeams = teams
    .map((team) => {
      const mapPDT = { ...team };
      mapPDT.totalWins = totalTeamWins(team);
      mapPDT.totalLosses = totalTeamLosses(team);
      mapPDT.avatar = team.avatar;

      return mapPDT;
    })
    .sort((prev, next) => {
      return next.rating - prev.rating;
    });

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
                  {mappedUsers.map((player, i) => (
                    <tr>
                      <td class="text-left number">
                        {i + 1}
                        <i class="fa fa-caret-up" aria-hidden="true"></i>
                      </td>
                      <td
                        class="text-left"
                        onClick={() => {
                          goToPlayer(player.id);
                        }}
                      >
                        <img src={player.avatar} alt="Profile Pic" />
                        <span>{player.name}</span>
                      </td>
                      <td>{player.rating}</td>
                      <td>{player.totalWins}</td>
                      <td>{player.totalLosses}</td>
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
      <section class="content-info">
        <div class="container paddings-mini">
          <div class="row">
            <div class="col-lg-12">
              <table class="table-striped table-responsive table-hover result-point">
                <thead class="point-table-head">
                  <tr>
                    <th class="text-left">Standings</th>
                    <th class="text-center">Team</th>
                    <th class="text-center">W</th>
                    <th class="text-center">L</th>
                  </tr>
                </thead>
                <tbody class="text-center">
                  {mappedTeams.map((team, i) => (
                    <tr>
                      <td class="text-left number">
                        {i + 1}
                        <i class="fa fa-caret-up" aria-hidden="true"></i>
                      </td>
                      <td
                      // class="text-left"
                      // onClick={() => {
                      //   goToPlayer(player.id);
                      // }}
                      >
                        <img src={team.avatar} alt="Profile Pic" />
                        <span>{team.team_name}</span>
                      </td>
                      <td>{team.totalWins}</td>
                      <td>{team.totalLosses}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <span> . </span>
        <Leading
          users={users}
          matchesPlayer={matchesPlayer}
          matchesTeam={matchesTeam}
          teams={teams}
          totalUserWins={totalUserWins}
          totalUserLosses={totalUserLosses}
        />
      </section>
    </div>
  );
}
