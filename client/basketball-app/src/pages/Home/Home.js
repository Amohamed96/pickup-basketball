import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Games from "../../components/Games";
import Leaderboard from "../../components/Leaderboard";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [matches, setMatches] = useState([]);
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
      setMatches(res.data.matches);
      console.log("HOME RES DATA----->", res.data);
    });
  });

  return (
    <>
      <Navbar users={users} />
      <Hero />
      <Games matches={matches} teams={teams} />
      <Leaderboard users={users} teams={teams} />
    </>
  );
}
