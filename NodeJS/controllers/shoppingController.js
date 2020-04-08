const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var { Shopping } = require('../models/shoppings.model');

//localhost:3000/shoppingPlaces/
router.get('/', (req,res) => {
     Shopping.find((err, docs) => {
         if(!err) { res.send(docs); }
         else { console.log('Error in Retriving Shopping Places: '+JSON.stringify(err, undefined,2)); }
     });
});

// => localhost:3000/shoppingPlaces/:id
router.get('/:id', (req,res) => {
    if(!ObjectId.isValid(req.params.id))
    {
        return res.status(400).send('No record with given id: $(req.params.id)');
    }
    Shopping.findById(req.params.id, (err,doc) => {
        if(!err) { res.send(doc); }
        else { console.log('Error in Retrieving Shopping Places: '+JSON.stringify(err,undefined,2)); }
    });
});

module.exports = router;