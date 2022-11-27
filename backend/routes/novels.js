const router = require('express').Router();
let Novel = require('../models/novel.model');

router.route('/').get((req, res) => {
    Novel.find()
        .then(novels => res.json(novels))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/novel').get((req, res) => {
    Novel.findOne({ name: req.query.name })
        .then(novel => res.json(novel))
        .catch(err => res.status(400).json('Error: ' + err));
    console.log(req.query.name)
    // Novel.findOneAndUpdate({ name: q.name },{ $inc: {views: 1 } })
});

router.route('/ranking').get((req, res) => {
    Novel.find()
        .then(novels => {
            novels.sort((a, b) => (a.rating > b.rating) ? -1: 1);
            res.json(novels.slice(0,10))
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/genre').get((req, res) => {
    console.log(req.query.genre)
    Novel.find({ genre: req.query.genre })
        .then(novels => res.json(novels))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;