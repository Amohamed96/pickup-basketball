//return object containing array of users matches teams

const express = require('express');
const router = express.Router();

module.exports = ({
    getUsers,
    getTeams,
    getMatches
}) => {

  router.get('/sync', async (req, res) => {
        const users = await getUsers()
        const teams = await getTeams()
        const matches = await getMatches()
          res.json({users: users, teams: teams, matches: matches})
    });

    //TODO: Use Promise All 
    router.get('/', async (req, res) => {
      const usersPromise = getUsers()
      const teamsPromise = getTeams()
      const matchesPromise = getMatches()
      Promise.all([
        usersPromise, teamsPromise, matchesPromise
      ])
      .then((result) => {
        res.json({users: result[0], teams: result[1], matches: result[2]})
      })
      .catch(error => {
        console.log(`Error setting up the reset route: ${error}`);
      });

  });
    return router

  }