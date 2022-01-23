const express = require("express");
const router = express.Router();
//TODO: Edit for matches
const { getPostsBymatches } = require("../helpers/dataHelpers");
////

module.exports = ({ getMatches, getMatchById, addMatch }) => {
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

  router.post("/", (req, res) => {
    const {
      match_date,
      team1_id,
      team2_id,
      winner_id,
      team1_score,
      team2_score,
    } = req.body;

    addMatch(
      match_date,
      team1_id,
      team2_id,
      winner_id,
      team1_score,
      team2_score
    )
      .then((newMatch) => res.json(newMatch))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  return router;
};
