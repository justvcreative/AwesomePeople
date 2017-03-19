'use strict';
// HTTP(S) routing/controllers

const router = require('express').Router();
const People = require('../models/app.model');

router.get('/', (req,res) => {
  res.render('index');
});

//Route for getting data
router.get('/api', (req, res) => {
    People.find({}, (err, people) => {
        if(err) {
        return res.status(500).json({message: err.message});
    } else {
        res.json({people: people});
    }
    });
});

//route for posting data
router.post('/api', (req, res) => {
    res.json({
        response: "You sent me a POST request",
        body: req.body
    });
});

module.exports = router;