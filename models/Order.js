'use strict'

var mongoose = require('mongoose');

var todaysDate = function(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd='0'+dd
    }

    if(mm<10) {
      mm='0'+mm
    }

    today = mm+'/'+dd+'/'+yyyy;
    return today;
  };

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
  },
  date: {
    type: 'String',
    default: todaysDate(),
    required: true,
    ref: 'Date Purchased'
  }
});

module.exports = orderSchema;
