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
    }
};