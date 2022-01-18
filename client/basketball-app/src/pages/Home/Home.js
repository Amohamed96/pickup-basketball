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