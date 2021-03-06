import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/Header/Navbar";
import MatchesPlayerForm from "./MatchesPlayerForm";
import "./Matches.scss";
// import Scoreboard from "../../components/Scoreboard";

export default function MatchesPlayer() {
  const [users, setUsers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [matchesTeam, setMatchesTeam] = useState([]);
  const [matchesPlayer, setMatchesPlayer] = useState([]);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    if (check) {
      return;
    }
    setCheck(true);

    axios.get("http://localhost:3000/api/home").then((res) => {
      setUsers(res.data.users);
      setTeams(res.data.teams);
      setMatchesTeam(res.data.matchesTeam);
      setMatchesPlayer(res.data.matchesPlayer);
      console.log("MATCH RES DATA----->", res.data);
    });
  });

  return (
    <div className="matches-page">
      <Navbar />
      <div className="matches-scorebard">
        <MatchesPlayerForm
          users={users}
          teams={teams}
          matchesTeam={matchesTeam}
          matchesPlayer={matchesPlayer}
        />
      </div>
      {/* <Scoreboard /> */}
    </div>
  );
}
