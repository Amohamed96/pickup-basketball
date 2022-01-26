import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Games from "../../components/Games";
import Leaderboard from "../../components/Leaderboard";
import { Button } from "semantic-ui-react";
import { Link as Scroll } from "react-scroll";

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
      <div className="landing">
        <div className="button-scroll">
          <Scroll to="slider" smooth={true}>
            <Button secondary>Get Started</Button>
          </Scroll>
        </div>

        <Games matchesTeam={matchesTeam} teams={teams} />
        <Leaderboard
          users={users}
          teams={teams}
          matchesTeam={matchesTeam}
          matchesPlayer={matchesPlayer}
        />
      </div>
    </>
  );
}
