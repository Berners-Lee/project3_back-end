'use strict';

var mongoose = require('mongoose');
mongoose.Promise = Promise;

mongoose.model('User', require('./User'));
mongoose.model('Order', require('./Order'));

mongoose.connect("mongodb://localhost/nozama-db");

module.exports = mongoose.connection;
