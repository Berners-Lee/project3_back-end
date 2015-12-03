var Product = require('../models').model('Product');
var db = require('../models/index');

module.exports = {
    deny : function(req, res) {
            res.sendStatus(405);
    },
    root : {
        get : function index(req, res, next) {
          Product.find({}).exec().then(function(orders) {
            res.json(orders);
          }).catch(function(error) {
            next(error);
          });
        }
    },
    dorm : {
      get : function dorm(req, res, next) {
          Product.find({category: "Dorm"}).exec().then(function(orders) {
            res.json(orders);
          }).catch(function(error) {
            next(error);
          });
        }
    },
    school : {
      get : function school(req, res, next) {
          Product.find({category: "School"}).exec().then(function(orders) {
            res.json(orders);
          }).catch(function(error) {
            next(error);
          });
        }
    },
    food : {
      get : function food(req, res, next) {
          Product.find({category: "Food"}).exec().then(function(orders) {
            res.json(orders);
          }).catch(function(error) {
            next(error);
          });
        }
    },
    fun : {
      get : function fun(req, res, next) {
          Product.find({category: "Fun"}).exec().then(function(orders) {
            res.json(orders);
          }).catch(function(error) {
            next(error);
          });
        }
    }
};
