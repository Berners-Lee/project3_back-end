var express = require('express');
var router = express.Router();
var orders = require('../controllers/orders');
var stripe = require('stripe')(process.env.STRIPE_SECRET);

router.post('/', orders.create.post);

module.exports = router;
