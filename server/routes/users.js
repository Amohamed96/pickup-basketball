const express = require('express');
const router = express.Router();

//TODO OPTIMIZE FOR TEAMS
const {
    getPostsByUsers
} = require('../helpers/dataHelpers');

module.exports = ({
    getUsers,
    getUserByName,
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
            first_name,
            email,
            password
        } = req.body;

        getUserByEmail(email)
            .then(user => {

                if (user) {
                    res.json({
                        msg: 'Sorry, a user account with this email already exists'
                    });
                } else {
                    return addUser(first_name, email, password)
                }

            })
            .then(newUser => res.json(newUser))
            .catch(err => res.json({
                error: err.message
            }));

    })

    return router;
};
