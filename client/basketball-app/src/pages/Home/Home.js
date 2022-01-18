import React, { useState, useEffect } from "react";
import axios from 'axios'
import './Home.css'
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";

 export default function Home () {

  const [users, setUsers] = useState([])
  const [matches, setMatches] = useState([])
  const [teams, setTeams] = useState([])

  useEffect(()=> {
    axios.get('http://localhost:3000/api/users')
    .then((res) => {
      setUsers(res.data)
    })
  }, [])

  useEffect(()=> {
    axios.get('http://localhost:3000/api/matches')
    .then((res) => {
      setMatches(res.data)
    })
  }, [])

  useEffect(()=> {
    axios.get('http://localhost:3000/api/teams')
    .then((res) => {
      setTeams(res.data)
    })
  }, [])
  
 console.log("USERS------>", users)
  return (
    <>
    <Navbar />
    <Hero />
  <div className="homepage">
      Matches played: 
        {matches.length > 0 ? matches.map((matchList) => {
        return <li> {matchList.date}{matchList.team1_score}{matchList.team2_score}</li>
      }): ""}
      Teams: 
        {teams.length > 0 ? teams.map((teamList) => {
        return <li>{teamList.team_name}</li>
      }): ""}
      Leaderboard: 
        {users.length > 0 ? users.map((userList) => {
        return <li><img className="profilePic" src={userList.avatar}/>{userList.name}</li>
      }): ""}
    </div>
    </> 
  );
}