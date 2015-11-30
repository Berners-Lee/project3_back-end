'use strict'

var mongoose = require('mongoose');

var profileSchema = new mongoose.Schema({
  user_ObjectId: {
    type: String,
    required: true,
    unique: true
  },
  currentCart: {
    type: Array
  },
  shoppingHistory: {
    type: Array
  }
});

module.exports = profileSchema;
