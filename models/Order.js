'use strict'

var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
  product_ObjectId: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    ref: "Product"
  },
  profile_ObjectId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Profile"
  }
});

module.exports = orderSchema;
