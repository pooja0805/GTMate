const express = require('express');
var routers1 = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var { Search } = require('../models/searchs.model');

//localhost:3000/searchPlaces/
routers1.get('/', (req,res) => {
     Search.find((err, docs) => {
         if(!err) { res.send(docs); }
         else { console.log('Error in Retriving Places: '+JSON.stringify(err, undefined,2)); }
     });
});

// => localhost:3000/searchPlaces/:id
routers1.get('/:id', (req,res) => {
    if(!ObjectId.isValid(req.params.id))
    {
        return res.status(400).send('No record with given id: $(req.params.id)');
    }
    Search.findById(req.params.id, (err,doc) => {
        if(!err) { res.send(doc); }
        else { console.log('Error in Retrieving Places: '+JSON.stringify(err,undefined,2)); }
    });
});

module.exports = routers1;