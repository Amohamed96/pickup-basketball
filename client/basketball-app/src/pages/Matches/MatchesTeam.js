import React from "react";
import Navbar from "../../components/Navbar";
import "./Matches.scss";
import MatchesTeamForm from "./MatchesTeamForm";

export default function MatchesTeam() {
  return (
    <div className="RegisterPage">
      <Navbar />
      <div className="register">
        <MatchesTeamForm />
      </div>
    </div>
  );
}
