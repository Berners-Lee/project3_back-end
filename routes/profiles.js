var express = require('express');
var router = express.Router();
var profiles = require('../controllers/profiles');

/* GET home page. */
router.get('/', profiles.root.get);
router.post('/', profiles.create.post);
router.patch('/add', profiles.addCart.patch);
router.patch('/delete', profiles.deleteCart.patch);
router.delete('/', profiles.destroy.delete);

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
