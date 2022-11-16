const router = require('express').Router();
let Novel = require('../models/novel.model');
var url = require("url")

router.route('/').get((req, res) => {
    Novel.find()
        .then(novels => res.json(novels))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/novel').get((req, res) => {
    var q = url.parse(req.url, true).query
    Novel.findOne({ name: q.name })
        .then(novel => res.json(novel))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/ranking').get((req, res) => {
    Novel.find()
        .then(novels => {
            novels.sort((a, b) => (a.rating > b.rating) ? -1: 1);
            res.json(novels.slice(0,10))
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;