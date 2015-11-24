'use strict'

var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Double,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  releaseDate: {
    type: Date,
    required: true
  }
});

module.exports = productSchema;
