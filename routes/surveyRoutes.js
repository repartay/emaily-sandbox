// Routes HOW TO:
// define arrow function
// immediately export it
// wire it up to express app (into index.js)

// before executing, we want to make sure:
// 1. user is logged in
const requireLogin = require('../middlewares/requireLogin');
// 2. user has enough credits


module.exports = app => {
	app.post('/api/surveys', requireLogin, (req, res) => {
		console.log('req', req, res);
	});
};