var Product = require('../models').model('Product');
var db = require('../models/index');

module.exports = {
    deny : function(req, res) {
            res.sendStatus(405);
    },
    root : {
        get : function index(req, res, next) {
          var search = req.query.name;
          var query = {};
          var searchPromises = [];
          if(!search) {
            Product.find(query).exec().then(function(product) {
                  res.json(product);
                }).catch(function(error) {
                  next(error);
            });
          }
          else {
            Product.find({}).exec().then(function(products){
              for(var i = 0; i<products.length; i++){
                if (products[i].name.toLowerCase().indexOf(search.toLowerCase()) > -1) {
                  query = {"name": products[i].name};
                  searchPromises.push(Product.find(query).exec());
                } // end of if
              }; // end of for loop
              Promise.all(searchPromises).then(function(searchResult){
                res.json(searchResult);
              }).catch(function(error) {
                console.error(error);
              });
            }); // end of product find
          }; // end of else
        }// end of get function
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
