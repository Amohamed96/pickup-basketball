const express = require('express');
const router = express.Router();
//TODO: Edit for matches
const {
    getPostsBymatches
} = require('../helpers/dataHelpers');
////

module.exports = ({
    getMatches,
    getMatchById,
    addMatch
}) => {
    /* GET matches listing. */
    router.get('/', (req, res) => {
        getMatches()
            .then((matches) => {
              res.json(matches)
            })
            .catch((err) => res.json({
                error: err.message
            }));
    });

    router.post('/', (req, res) => {

        const {
          ID,
          match_date ,
          team1_id,
          team2_id,
          winner_id,
          team1_score,
          team2_score
        } = req.body;

        getMatchById(ID)
            .then(Match => {

                if (Match) {
                    res.json({
                        msg: 'Sorry, a Match  with this id already exists'
                    });
                } else {
                    return addMatch(ID, match_date, team1_id, team2_id, winner_id, team1_score, team2_score)
                }

            })
            .then(newMatch => res.json(newMatch))
            .catch(err => res.json({
                error: err.message
            }));

    })

    return router;
};