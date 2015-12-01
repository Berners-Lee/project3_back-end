var Order = require('../models').model('Order');
var Profile = require('../models').model('Profile');
var db = require('../models/index');

module.exports = {
    deny : function(req, res) {
            res.sendStatus(405);
    },
    root : {
        get : function index(req, res, next) {
            var currentProfileId;
            Profile.find({user_ObjectId: req.user._id}).exec().then(function(profile) {
                currentProfileId = profile[0]._id;
                Order.find({profile_ObjectId: currentProfileId}).exec().then(function(orders) {
                    res.json(orders);
                }).catch(function(error) {
                    next(error);
                });
            });
        }
    },
    create : {
        post : function(req, res, next) {
            var currentProfileId;
            Profile.find({user_ObjectId: req.user._id}).exec().then(function(profile) {
                currentProfileId = profile[0]._id;
                cart = profile[0].cart;
                profile[0].cart = [];
                profile[0].save(function(err){
                    if (err) return next(err);
                    res.send('added');
                });
                var pOrder = new Promise(function(res, rej) {
                    Order.create({
                        profile_ObjectId : currentProfileId,
                        product_ObjectId : cart
                    }, function(err, order) {
                        if(err) {
                            rej(err);
                            return;
                        }
                        res(order);
                    });
                });
                return pOrder;
            }).then(function(doc) {
                // res.sendStatus(201);
                res.json(doc);
                // res.send('Created');
                return doc.save();
            }).catch(function(err) {
                next(err);
            });
        }
    }
};
