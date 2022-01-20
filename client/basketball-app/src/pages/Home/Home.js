import React, { useState, useEffect } from "react";
import axios from 'axios'
import './Home.css'
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Games from "../../components/Games";
import Leaderboard from "../../components/Leaderboard";

export default function Home () {

  const [users, setUsers] = useState([])
  const [matches, setMatches] = useState([])
  const [teams, setTeams] = useState([])
  const [check, setCheck] = useState(false)
  

  useEffect(()=> {
    if (check){
      return
    }
    setCheck(true)

    axios.get('http://localhost:3000/api/home')
    .then((res) => {
      setUsers(res.data.users) 
      setTeams(res.data.teams)  
      setMatches(res.data.matches)  
      console.log("res.data", res.data);
    })
    })



  return (
      <>
        <Navbar />
        <Hero />
        <Games matches={matches} teams={teams} />
        <Leaderboard users={users} teams={teams}/>
        
      <div className="homepage">
          Matches played: 
            {matches.length > 0 ? matches.map((matchList) => {
            return <ul> {matchList.date}{matchList.team1_score}{matchList.team2_score}</ul>
          }): ""}
          Teams: 
            {teams.length > 0 ? teams.map((teamList) => {
            return <ul><img className="teamLogo" src={teamList.avatar}/>{teamList.team_name}</ul>
          }): ""}
          Leaderboard: 
            {users.length > 0 ? users.map((userList) => {
            return <ul><img className="profilePic" src={userList.avatar}/>{userList.name}</ul>
          }): ""}

      </div>
                  
  </>
  );
}