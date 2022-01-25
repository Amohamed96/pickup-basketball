const express = require("express");
const router = express.Router();
//TODO: Edit for matches
const {
  getMatches,
  addMatchPlayer,
  addMatchTeam,
} = require("../helpers/dbHelpers");
////

module.exports = ({
  getMatchesTeam,
  getMatchesPlayer,
  getMatchById,
  addMatch,
  addMatchPlayer,
  addMatchTeam,
}) => {
  /* GET matches listing. */
  router.get("/team", (req, res) => {
    getMatchesTeam()
      .then((matches) => {
        res.json(matches);
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });
  router.get("/player", (req, res) => {
    getMatchesPlayer()
      .then((matches) => {
        res.json(matches);
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  router.post("/team", (req, res) => {
    const { team1_name, team2_name, winner_name, team1_score, team2_score } =
      req.body;
    const matchDateT = new Date();
    addMatchTeam(
      matchDateT,
      team1_name,
      team2_name,
      winner_name,
      team1_score,
      team2_score
    )
      .then((newMatch) => {
        console.log("NEW MATCH RESULT", newMatch);
        res.json(newMatch);
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  router.post("/player", (req, res) => {
    const {
      player1_name,
      player2_name,
      winner_name,
      player1_score,
      player2_score,
    } = req.body;
    const matchDateP = new Date();
    addMatchPlayer(
      matchDateP,
      player1_name,
      player2_name,
      winner_name,
      player1_score,
      player2_score
    )
      .then((newMatch) => {
        console.log("NEW MATCH RESULT", newMatch);
        res.json(newMatch);
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  return router;
};
