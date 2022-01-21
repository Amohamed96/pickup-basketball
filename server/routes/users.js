const express = require("express");
const router = express.Router();
const { getUserById, getChallengesById } = require("../helpers/dbHelpers");
//TODO OPTIMIZE FOR TEAMS
const { getPostsByUsers } = require("../helpers/dataHelpers");

module.exports = ({
  getUsers,
  getUserByEmail,
  addUser,
  getUserById,
  getChallengesById,
}) => {
  /* GET users listing. */
  router.get("/", (req, res) => {
    getUsers()
      .then((users) => {
        res.json(users);
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  // GET USER BASED ON THEIR ID

  router.get(`/profile`, (req, res) => {
    const usersPromise = getUserById(1);
    const challengesPromise = getChallengesById();
    Promise.all([usersPromise, challengesPromise])
      .then((result) => {
        res.json({ users: result[0], challenges: result[1] });
      })
      .catch((error) => {
        console.log(`Error setting up the reset route: ${error}`);
      });
  });

  router.post("/signup", (req, res) => {
    const { name, email, password, bio, avatar, team_id } = req.body;

    getUserByEmail(email)
      .then(async (user) => {
        if (user) {
          res.status(404).json({
            msg: "Sorry, a user account with this email already exists",
          });
        } else {
          const addPlayer = await addUser(
            name,
            email,
            password,
            bio,
            avatar,
            team_id
          );
          console.log("ADD USER FUNCTIOn", addPlayer);
          return addPlayer;
        }
      })
      .then((newUser) => res.json(newUser))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });
  router.post("/login", (req, res) => {
    const { email, password } = req.body;
    console.log("PASSWORD ()####", email, password);
    getUserByEmail(email)
      .then(async (user) => {
        if (!user) {
          res.status(404).json({
            msg: "Sorry, please create an account",
          });
        } else {
          res.send({ user: user });
        }
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });
  //TODO: make route for challenges GET and POST
  router.get("/challenges", (req, res) => {
    getChallengesByID()
      .then((challenges) => {
        res.json(challenges);
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  return router;
};
