const express = require('express');
var router3 = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var { Religious } = require('../models/religious.model');

//localhost:3000/religiousPlaces/
router3.get('/', (req,res) => {
     Religious.find((err, docs) => {
         if(!err) { res.send(docs); }
         else { console.log('Error in Retriving Religious Places: '+JSON.stringify(err, undefined,2)); }
     });
});

// => localhost:3000/religiousPlaces/:id
router3.get('/:id', (req,res) => {
    if(!ObjectId.isValid(req.params.id))
    {
        return res.status(400).send('No record with given id: $(req.params.id)');
    }
    Religious.findById(req.params.id, (err,doc) => {
        if(!err) { res.send(doc); }
        else { console.log('Error in Retrieving Religious Places: '+JSON.stringify(err,undefined,2)); }
    });
});

module.exports = router3;