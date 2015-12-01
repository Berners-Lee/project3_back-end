var Profile = require('../models').model('Profile');
var db = require('../models/index');

module.exports = {
    deny : function(req, res) {
            res.sendStatus(405);
    },
    root : {
        get : function (req, res, next) {
          Profile.find({user_ObjectId: req.user._id}).exec().then(function(profile) {
            res.json(profile);
          }).catch(function(error) {
            next(error);
          });
        }
    },
    create : {
        post : function(req, res, next) {
            var pProfile = new Promise(function(res, rej) {
                Profile.create({
                    user_ObjectId : req.user._id,
                    currentCart : req.body.currentCart,
                    shoppingHistory : req.body.shoppingHistory
                }, function(err, profile) {
                    if(err) {
                        rej(err);
                        return;
                    }
                    res(profile);
                });
            });
            pProfile.then(function() {
                res.sendStatus(200);
                res.send('Created');
                return this.save();
            }).catch(function(err) {
                next(err);
            });
        }
    },
    updateCart : {
        patch : function(req, res, next) {
            Profile.find({user_ObjectId: req.user._id}).exec().then(function(profile){
                profile[0].currentCart.push(req.body.currentCart);
                // profile.currentCart.push(req.body.currentCart);
                profile[0].save(function(err){
                    if (err) return next(err);
                    res.send('Current cart updated');
                });
            });
        }
    },
    destroy : {
        delete : function(req, res, next) {
            Profile.remove({user_ObjectId: req.user._id}, function(err, profile) {
                if (err) return next(err);
                res.send(profile); // see results
            });
        }
    }
};
