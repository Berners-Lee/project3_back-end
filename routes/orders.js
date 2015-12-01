var express = require('express');
var router = express.Router();
var orders = require('../controllers/orders');

/* GET home page. */
router.get('/', orders.root.get);
router.post('/', orders.create.post);

module.exports = router;
