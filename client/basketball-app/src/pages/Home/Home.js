import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import Hero from "../../components/Header/Hero";
import Navbar from "../../components/Header/Navbar";
import Games from "../../components/Leaderboards/Games";
import Leaderboard from "../../components/Leaderboards/Leaderboard";
import { Button } from "semantic-ui-react";
import { Link as Scroll } from "react-scroll";
import { IoIosBasketball } from "react-icons/io";

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
        <Hero />
        <div className="button-scroll button-animated bounce">
          <Scroll to="slider" smooth={true}>
            <IoIosBasketball className="basketball-icon" />
          </Scroll>
        </div>

        <Games
          matchesPlayer={matchesPlayer}
          matchesTeam={matchesTeam}
          teams={teams}
          users={users}
        />
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
