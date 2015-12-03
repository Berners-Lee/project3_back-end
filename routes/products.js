var express = require('express');
var router = express.Router();
var products = require('../controllers/products');

/* GET home page. */
router.get('/', products.root.get);
router.get('/dorm', products.dorm.get);
router.get('/school', products.school.get);
router.get('/food', products.food.get);
router.get('/fun', products.fun.get);


module.exports = router;
