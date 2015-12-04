# Readme

### About

Nozama, built by Team Berners-Lee: Dave, Meng, and Sarabrent, is an e-commerce site for the college-bound. We sell products in four categories: Dorm, School, Food, and Fun.

On the back end, we used:

- Express
- Node.js
- Mongo DB
- Mongoose
- Passport
- bcrypt
- Body-Parser
- Cookie-Parser
- CORS
- Morgan
- Stripe
- UUID

### Catalog of routes
- router.post('/', orders.create.post);
- router.get('/', authCtrl.root.get);
- router.route('/login').get(authCtrl.deny).post(authCtrl.login.post).all(authCtrl.login.all);
- router.route('/logout').all(authCtrl.logout.all);
- router.route('/changePassword').get(authCtrl.deny).patch(authCtrl.changePassword.patch);
- router.route('/signup').get(authCtrl.deny).post(authCtrl.signup.post);
- router.route('/destroy').delete(authCtrl.destroy.delete);
- router.get('/', orders.root.get);
- router.post('/', orders.create.post);
- router.get('/', products.root.get);
- router.get('/dorm', products.dorm.get);
- router.get('/school', products.school.get);
- router.get('/food', products.food.get);
- router.get('/fun', products.fun.get);
- router.get('/', profiles.root.get);
- router.post('/', profiles.create.post);
- router.patch('/add', profiles.addCart.patch);
- router.patch('/delete', profiles.deleteCart.patch);
- router.delete('/', profiles.destroy.delete);
- router.get('/', function(req, res, next) {res.send('respond with a resource');});


### Other things you should know
* [Deployed back-end] 
* [Frontend repo] 

[Frontend repo]: <https://github.com/Berners-Lee/project3_front-end>
[Deployed back-end]: <https://peaceful-plains-2243.herokuapp.com/>

