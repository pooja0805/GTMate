const express = require('express');
var router2 = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var { Waterfall } = require('../models/waterfalls.model');

//localhost:3000/waterfalls/
router2.get('/', (req,res) => {
     Waterfall.find((err, docs) => {
         if(!err) { res.send(docs); }
         else { console.log('Error in Retriving Waterfalls: '+JSON.stringify(err, undefined,2)); }
     });
});

// => localhost:3000/waterfalls/:id
router2.get('/:id', (req,res) => {
    if(!ObjectId.isValid(req.params.id))
    {
        return res.status(400).send('No record with given id: $(req.params.id)');
    }
    Waterfall.findById(req.params.id, (err,doc) => {
        if(!err) { res.send(doc); }
        else { console.log('Error in Retrieving Waterfalls: '+JSON.stringify(err,undefined,2)); }
    });
});

module.exports = router2;