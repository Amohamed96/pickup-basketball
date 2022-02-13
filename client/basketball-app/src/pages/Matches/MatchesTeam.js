import React from "react";
import Navbar from "../../components/Header/Navbar";
import "./Matches.scss";
import MatchesTeamForm from "./MatchesTeamForm";

export default function MatchesTeam() {
  return (
    <div className="matches-page">
      <Navbar />
      <div className="matches-scorebard">
        <MatchesTeamForm />
      </div>
    </div>
  );
}
