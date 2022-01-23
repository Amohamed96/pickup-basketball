import React from "react";
import Navbar from "../../components/Navbar";
import "./Matches.css";
import MatchesTeamForm from "./MatchesTeamForm";

export default function MatchesTeam() {
  return (
    <div className="RegisterPage">
      <Navbar />
      <a href="/matches-player">1 v 1</a>
      <div className="register">
        <MatchesTeamForm />
      </div>
    </div>
  );
}
