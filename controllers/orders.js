var Order = require('../models').model('Order');
var Profile = require('../models').model('Profile');
var db = require('../models/index');
var stripe = require('stripe')(process.env.STRIPE_SECRET);


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
            (new Promise(function(resolve, reject) {
                stripe.charges.create({
                    amount: 2000,
                    currency: 'usd',
                    source: req.body.stripeToken
                }, function(err, charge){
                    if(err) return reject(err);
                    console.log("charged");
                    res.redirect('back');
                    resolve(charge);
                });
            })).then(function() {
                var currentProfileId;
                return Profile.find({user_ObjectId: req.user._id}).exec().then(function(profile) {
                    currentProfileId = profile[0]._id;
                    cart = profile[0].cart;
                    profile[0].cart = [];
                    profile[0].save(function(err){
                        if (err) return next(err);
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
                        });
                    });
                    return pOrder;
                });
            }).then(function(doc) {
                res.json(doc);
                return doc.save();
            }).catch(function(err) {
                next(err);
            });
        }
    }
};
