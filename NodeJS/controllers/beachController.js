const express = require('express');
var router1 = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var { Beach } = require('../models/beaches.model');

//localhost:3000/beaches/
router1.get('/', (req,res) => {
     Beach.find((err, docs) => {
         if(!err) { res.send(docs); }
         else { console.log('Error in Retriving Beaches: '+JSON.stringify(err, undefined,2)); }
     });
});

// => localhost:3000/beaches/:id
router1.get('/:id', (req,res) => {
    if(!ObjectId.isValid(req.params.id))
    {
        return res.status(400).send('No record with given id: $(req.params.id)');
    }
    Beach.findById(req.params.id, (err,doc) => {
        if(!err) { res.send(doc); }
        else { console.log('Error in Retrieving Beaches: '+JSON.stringify(err,undefined,2)); }
    });
});

module.exports = router1;