'use strict'

var mongoose = require('mongoose');

var profileSchema = new mongoose.Schema({
  user_ObjectId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true
  },
  cart: {
    type: [mongoose.Schema.Types.ObjectId]
  }
});

module.exports = profileSchema;
