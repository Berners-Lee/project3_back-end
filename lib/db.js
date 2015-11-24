'use strict'

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/nozama-db');
module.exports = mongoose.connection;
