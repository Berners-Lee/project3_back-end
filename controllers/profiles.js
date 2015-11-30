var Profile = require('../models').model('Profile');
var db = require('../models/index');

module.exports = {
    deny : function(req, res) {
            res.sendStatus(405);
    },
    root : {
        get : function (req, res, next) {
          Profile.find({}).exec().then(function(profiles) {
            res.json(profiles);
          }).catch(function(error) {
            next(error);
          });
        }
    },
    create : {
        post : function(req, res, next) {
            var pProfile = new Promise(function(res, rej) {
                Profile.create({
                    user_ObjectId : req.body.user_ObjectId,
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
    }
    // login : {
    //     post : passport.authenticate('local'),
    //     all : function(req, res) {
    //         res.sendStatus(200);
    //     }
    // },
    // logout : {
    //     all : function(req, res, next) {
    //         // if user is not logged in
    //         if(!req.user) {
    //             var err = new Error("Log in first.");
    //             return next(err);
    //         }

    //         req.logout();
    //         res.sendStatus(200);
    //     }
    // },
    // changePassword : {
    //     patch : function(req, res, next) {
    //         // check that user is logged in
    //         // check that body contains a password value
    //         if(!req.body || !req.user || !req.body.password) {
    //             var err = new Error("No password supplied.");
    //             return next(err);
    //         }
    //         // bcrypt the password
    //         req.user.setPassword(req.body.password).
    //             then(function() {
    //                 res.sendStatus(200);
    //             }).catch(function(err) {
    //                 next(err);
    //             });
    //     }
    // },
    // signup : {
    //     post : function(req, res, next) {
    //         if(!req.body || !req.body.username || !req.body.password) {
    //             var err = new Error("No credentials.");
    //             return next(err);
    //         }

    //         var pUser = new Promise(function(res, rej) {
    //             User.create({
    //                 userName : req.body.username
    //             }, function(err, user) {
    //                 if(err) {
    //                     rej(err);
    //                     return;
    //                 }

    //                 res(user);
    //             });
    //         });
    //         pUser.then(function(user) {
    //             return user.setPassword(req.body.password);
    //         }).then(function() {
    //             res.sendStatus(200);
    //         }).catch(function(err) {
    //             next(err);
    //         });
    //     }
    // },
    // destroy : {
    //     delete : function(req, res, next) {
    //         req.user.remove({"userName":req.user.userName}, function(err, docs) {
    //             if (err) return next(err);
    //             req.logout();
    //             res.send(docs); // see results
    //         });
    //     }
    // }
};
