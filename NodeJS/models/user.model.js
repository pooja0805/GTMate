const mongoose = require('mongoose');

var User = mongoose.model('User',{
    fullName: { type: String },
    email: { type: String },
    pass: { type: String },
    saltSecret: String 
});

module.exports = {User};