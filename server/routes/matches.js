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
  getMatches,
  getMatchById,
  addMatch,
  addMatchPlayer,
  addMatchTeam,
}) => {
  /* GET matches listing. */
  router.get("/", (req, res) => {
    getMatches()
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
    const { team1_id, team2_id, winner_id, team1_score, team2_score } =
      req.body;
    const matchDateT = new Date();
    addMatchTeam(
      matchDateT,
      team1_id,
      team2_id,
      winner_id,
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
    const { player1_id, player2_id, winner_id, player1_score, player2_score } =
      req.body;
    const matchDateP = new Date();
    addMatchPlayer(
      matchDateP,
      player1_id,
      player2_id,
      winner_id,
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
