'use strict'

var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
  product_ObjectId: {
    type: String,
    required: true,
  },
  profile_ObjectId: {
    type: String,
    unique: true,
    required: true
  }
});

module.exports = orderSchema;
