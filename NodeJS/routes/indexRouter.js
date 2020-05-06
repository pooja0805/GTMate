const express = require('express');
const rout = express.Router();

const ctrlUser = require('../controllers/userController.js');

const jwtHelper = require('../config/jwtHelper');

rout.post('/register', ctrlUser.register);
rout.post('/authenticate', ctrlUser.authenticate);
rout.get('/userProfile', jwtHelper.verifyJwtToken, ctrlUser.userProfile);

module.exports = rout;