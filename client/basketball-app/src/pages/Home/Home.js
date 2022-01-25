import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import "./Home.css";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Games from "../../components/Games";
import Leaderboard from "../../components/Leaderboard";
import MenuExampleInvertedSegment from "../../components/Menu/Menu";
// import { createMedia } from "@artsy/fresnel";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [matchesTeam, setMatchesTeam] = useState([]);
  const [matchesPlayer, setMatchesPlayer] = useState([]);
  const [teams, setTeams] = useState([]);
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
      console.log("HOME RES DATA----->", res.data);
    });
  });

  return (
    <>
      <MenuExampleInvertedSegment users={users} />
      <Navbar users={users} />
      <Hero />
      <Games matchesTeam={matchesTeam} teams={teams} />
      <Leaderboard
        users={users}
        teams={teams}
        matchesTeam={matchesTeam}
        matchesPlayer={matchesPlayer}
      />
    </>
  );
}
