const express = require("express");
const router = express.Router();

//TODO OPTIMIZE FOR TEAMS
const { getPostsByUsers } = require("../helpers/dataHelpers");

module.exports = ({ getUsers, getUserByEmail, addUser, getUserById }) => {
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

  router.get(`/profile/:id`, (req, res) => {
    const { id, users } = req.params;
    console.log('REQUEST', req.params, id)
    getUserById(id)
      .then((users) => {
        res.json(users);
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
    
    
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

  return router;
};
