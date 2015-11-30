'use strict'

var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var uniqueValidator = require('mongoose-unique-validator');


var userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true
  },
  passwordDigest: {
    type: String,
    required: true
  }
});

userSchema.plugin(uniqueValidator);
 module.exports = userSchema;
