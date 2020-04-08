const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/RegistrationDB', (err) => {
    if(!err)
        console.log('MongoDB Connection Successful!!');
    else
        console.log('Error in DB Connection: '+JSON.stringify(err, undefined, 2));
});

require('./models/user.model');

module.exports = mongoose;