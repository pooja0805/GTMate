const express = require('express');
var routers = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var { Romantic } = require('../models/romantics.model');

//localhost:3000/romanticPlaces/
routers.get('/', (req,res) => {
     Romantic.find((err, docs) => {
         if(!err) { res.send(docs); }
         else { console.log('Error in Retriving Romantic Places: '+JSON.stringify(err, undefined,2)); }
     });
});

// => localhost:3000/romanticPlaces/:id
routers.get('/:id', (req,res) => {
    if(!ObjectId.isValid(req.params.id))
    {
        return res.status(400).send('No record with given id: $(req.params.id)');
    }
    Romantic.findById(req.params.id, (err,doc) => {
        if(!err) { res.send(doc); }
        else { console.log('Error in Retrieving Romantic Places: '+JSON.stringify(err,undefined,2)); }
    });
});

module.exports = routers;