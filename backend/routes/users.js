const router = require('express').Router();
let User = require('../models/user.model');

router.route('/login').get((req, res) => {
    User.findOne({ username: req.body.username })
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/register').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const newUser = new User({
        username,
        password
    });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/login').get((req, res) => {
    User.findOne({ username: req.body.username })
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;