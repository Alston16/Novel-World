const router = require('express').Router();
const bcrypt = require('bcryptjs')
let User = require('../models/user.model');

router.route('/login').get((req, res) => {
    User.findOne({ username: req.query.username })
        .then(user => {
            if (user === null) {
                res.send(null);
            }
            else {
                bcrypt
                    .compare(req.query.password, user.password)
                    .then(result => res.send(result))
                    .catch(err => console.error(err.message));
            }
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/register').post(async (req, res) => {
    console.log(req.body)
    const { username, email, contact, password: plainTextPassword } = req.body

    const password = await bcrypt.hash(plainTextPassword, 10)

    try {
        const response = await User.create({
            username,
            email,
            contact,
            password

        })
        console.log('User created successfully', response)

    } catch (error) {
        console.log(error)
        return res.json({ status: 'error' })
    }

    res.json({ status: 'ok' })
})

router.route('/library').post((req, res) => {
    User.findOneAndUpdate(
        { _id: '6382e8e07c3f212db0cb4396' },
        { $push: { library: req.body.name } },
        function (error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log(success);
            }
        });

})

router.route('/library').delete((req, res) => {
    User.findOneAndUpdate(
        { _id: '6382e8e07c3f212db0cb4396' },
        { $pull: { library: req.query.name } },
        function (error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log(success);
            }
        });
})

router.route('/library').get((req, res) => {
    User.findOne({ username: req.query.username })
        .then(novels => res.json(novels.library))
        .catch(err => res.status(400).json('Error: ' + err));

})

module.exports = router;