require('./config/config');
require('./models/db.js');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const rtsIndex = require('./routes/indexRouter.js');

// var userController = require('./controllers/userController.js');
var beachController = require('./controllers/beachController.js');
var waterfallController = require('./controllers/waterfallController.js');
var religiousController = require('./controllers/religiousController.js');
var shoppingController = require('./controllers/shoppingController.js');
var picnicSpotController = require('./controllers/picnicController.js');
var romanticController = require('./controllers/romanticController.js');

var app = express();

//MIDDLEWARE
app.use(bodyParser.json());
app.use(cors({ origin : 'http://localhost:4200' }));
app.use(passport.initialize());

app.use('/user', rtsIndex);

//Error Handler
app.use((err, req, res, next) => {
    if(err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});

//Start Server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));

app.use('/beaches',beachController);
app.use('/waterfalls',waterfallController);
app.use('/religiousPlaces',religiousController);
app.use('/shoppingPlaces',shoppingController);
app.use('/picnicSpots', picnicSpotController);
app.use('/romanticPlaces', romanticController);
