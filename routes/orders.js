var express = require('express');
var router = express.Router();
var orders = require('../controllers/orders');

/* GET home page. */
router.get('/', orders.root.get);
router.post('/', orders.create.post);


/**AUTH ROUTES
 *  a login route using `passport.authenticate`
 *  a register route **not using passport**
 *
 */
// router.route('/login').
//     get(authCtrl.deny).
//     post(authCtrl.login.post).
//     all(authCtrl.login.all);

// router.route('/logout').
//   all(authCtrl.logout.all);

// router.route('/changePassword').
//   get(authCtrl.deny).
//   patch(authCtrl.changePassword.patch);

// router.route('/signup').
//   get(authCtrl.deny).
//   post(authCtrl.signup.post);

// router.route('/destroy').
//   delete(authCtrl.destroy.delete);

module.exports = router;
