'use strict'

var mongoose = require('mongoose');

var profileSchema = new mongoose.Schema({
  user_ObjectId: {
    type: String,
    required: true,
    unique: true
  },
  currentCart: {
    type: Arrays
  },
  shoppingHistory: {
    type: Arrays
  }
});

module.exports = profileSchema;
