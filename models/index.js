'use strict';

var mongoose = require('mongoose');
mongoose.Promise = Promise;

mongoose.model('User', require('./User'));
mongoose.model('Profile', require('./Profile'));
mongoose.model('Product', require('./Product'));

mongoose.connect("mongodb://localhost/nozama-db");

module.exports = mongoose.connection;
