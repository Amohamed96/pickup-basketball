const express = require('express');
const router = express.Router();

//TODO OPTIMIZE FOR TEAMS
const {
    getPostsByUsers
} = require('../helpers/dataHelpers');

module.exports = ({
    getUsers,
    getUserByEmail,
    addUser
}) => {
    /* GET users listing. */
    router.get('/', (req, res) => {
        getUsers()
            .then((users) => {
              res.json(users)
            })
            .catch((err) => res.json({
                error: err.message
            }));
    });

    router.post('/', (req, res) => {

        const {
            name,
            email,
            password
        } = req.body;

        getUserByEmail(email)
            .then(email => {

                if (email) {
                    res.status(400).json({
                        msg: 'Sorry, a user account with this email already exists'
                    });
                } else {
                    const addPlayer = addUser(name, email, password)
                    console.log('ADD USER FUNCTIOn', addPlayer)
                    return addPlayer
                }

            })
            .then(newUser => res.json(newUser))
            .catch(err => res.json({
                error: err.message
            }));

    })

    return router;
};
