'use strict'

var express = require('express');
var UserController = require('../controllers/user');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

var multipart = require('connect-multiparty');

api.get('/pruebas', UserController.pruebas);
api.post('/register', UserController.saveUser);

module.exports = api;

