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
    type: String
  }
});

userSchema.plugin(uniqueValidator);

userSchema.methods.comparePassword = function(password) {
  var self = this;

  return new Promise(function(res, rej) {
    bcrypt.compare(password, self.passwordDigest, function(err, match) {
      if(err) {
        rej(err);
        return;
      }

      res(match);
    });
  });
};

userSchema.methods.setPassword = function(password) {
  var self = this;

  var saltPromise = new Promise(function saltExec(res, rej) {
    // call 'bcrypt.genSalt' method to generate a 16-byte salt for use in computing the digest
    bcrypt.genSalt(16, function(err, salt) {
      if(err) {
        rej(err);
        return;
      }

      res(salt);
    });
  });

  var returnedPromise = saltPromise.then(function(salt) {
    return new Promise(function hashExec(res, rej) {
      bcrypt.hash(password, salt, function(err, digest) {
        if(err) {
          rej(err);
          return;
        }

        res(digest);
      });
    });
  }).then(function(digest) {
    self.passwordDigest = digest;
    return self.save();
  });

  return returnedPromise;
};


module.exports = userSchema;
