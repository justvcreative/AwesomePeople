'use strict';
// HTTP(S) routing/controllers

const router = require('express').Router();
const mongoose = require('mongoose');
const People = require('../models/app.model');


//Get and render the view
router.get('/', (req, res) => {
  res.render('index');
});

//CREATE: Route for posting data
router.post('/api', (req, res) => {
    let person = req.body;
    People.create(person, (err, person) => {
        if(err) {
            return res.status(500).json({message: err.message});
        } else {
            res.json({'person': person, message: person.name + ' was created!'});
        }
    });
});

//READ: Route for getting data
router.get('/api', (req, res) => {
    People.find({}, (err, people) => {
        if(err) {
        return res.status(500).json({message: err.message});
    } else {
        res.json(people);
    }
    });
});

//UPDATE: Route for updating(put) data
router.put('/api/:id', (req, res) => {
    let id = req.params.id;
    let person = req.body;
    if(person && person._id !== id) {
        return res.status(500).json({err: 'IDs do not match'});
    } else {
        People.findByIdAndUpdate(id, person, {new: true}, function(err, person) {
            if(err) {
                return res.status(500).json({message: err.message});
            } else {
                res.json({'person': person, message: person.name + ' was updated!'});
            }
        });
    }
});

//DELETE: Route for deleting data
router.delete('/api/:id', function(req, res) {
    let id = req.params.id;
    People.remove({'_id': id}, function(err, person) {
        if(err) {
            return res.status(500).json({message: err.message});
        }
        res.send({'person': person, message: 'This perosn was Deleted!'});
    });
});

module.exports = router;