const express = require('express');
var router4 = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var { Picnic } = require('../models/picnics.model');

//localhost:3000/picnicSpots/
router4.get('/', (req,res) => {
     Picnic.find((err, docs) => {
         if(!err) { res.send(docs); }
         else { console.log('Error in Retriving Picnic Spots: '+JSON.stringify(err, undefined,2)); }
     });
});

// => localhost:3000/picnicSpots/:id
router4.get('/:id', (req,res) => {
    if(!ObjectId.isValid(req.params.id))
    {
        return res.status(400).send('No record with given id: $(req.params.id)');
    }
    Picnic.findById(req.params.id, (err,doc) => {
        if(!err) { res.send(doc); }
        else { console.log('Error in Retrieving Picnic Spots: '+JSON.stringify(err,undefined,2)); }
    });
});

module.exports = router4;