const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var { User } = require('../models/user.model');

// => localhost:3000/users/
router.get('/', (req,res) => {
    User.find((err,docs) => {
        if(!err) { res.send(docs); }
        else { console.log('Error in Retrieving Users: '+JSON.stringify(err,undefined,2)); }
    });
});

// => localhost:3000/users/:id
router.get('/:id', (req,res) => {
    if(!ObjectId.isValid(req.params.id))
    {
        return res.status(400).send('No record with given id: $(req.params.id)');
    }
    User.findById(req.params.id, (err,doc) => {
        if(!err) { res.send(doc); }
        else { console.log('Error in Retrieving Users: '+JSON.stringify(err,undefined,2)); }
    });
});

// => localhost:3000/users/
router.post('/', (req,res) => {
    var user = new User({
        email: req.body.email,
        pass: req.body.pass,
        cpass: req.body.cpass,
    });
    user.save((err,doc) => {
        if(!err) { res.send(doc); }
        else { console.log('Error in User Save: '+JSON.stringify(err,undefined,2)); }
    });
});

module.exports = router;