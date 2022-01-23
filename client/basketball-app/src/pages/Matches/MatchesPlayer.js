import React from "react";
import Navbar from "../../components/Navbar";
import MatchesPlayerForm from "./MatchesPlayerForm";
import "./Matches.css";

export default function MatchesPlayer() {
  return (
    <div className="RegisterPage">
      <Navbar />
      <div className="register">
        <MatchesPlayerForm />
      </div>
      <a href="/matches-team">Teams</a>
    </div>
  );
}
