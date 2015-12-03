var express = require('express');
var router = express.Router();
var stripe = require('stripe')(process.env.STRIPE_SECRET);

router.post('/', function(req, res, next){
  stripe.charges.create({
    amount: 2000,
    currency: 'usd',
    source: req.body.stripeToken,
  }, function(err, charge){
    if(err) return next(err);
    console.log(charge);
    res.json();
  });
});

module.exports = router;
