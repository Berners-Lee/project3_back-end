var express = require('express');
var router = express.Router();
var products = require('../controllers/products');

/* GET home page. */
router.get('/', products.root.get);


module.exports = router;