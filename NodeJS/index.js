const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var userController = require('./controllers/userController.js');
var beachController = require('./controllers/beachController.js');
var waterfallController = require('./controllers/waterfallController.js');
var religiousController = require('./controllers/religiousController.js');
var shoppingController = require('./controllers/shoppingController.js');
var picnicSpotController = require('./controllers/picnicController.js');
var romanticController = require('./controllers/romanticController.js');

require('./config/config');

var app = express();

//MIDDLEWARE
app.use(bodyParser.json());
app.use(cors({ origin : 'http://localhost:4200' }));

//Start Server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));

app.use('/users',userController);
app.use('/beaches',beachController);
app.use('/waterfalls',waterfallController);
app.use('/religiousPlaces',religiousController);
app.use('/shoppingPlaces',shoppingController);
app.use('/picnicSpots', picnicSpotController);
app.use('/romanticPlaces', romanticController);