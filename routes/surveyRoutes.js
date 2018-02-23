const mongoose = require('mongoose');
// Routes HOW TO:
// define arrow function
// immediately export it
// wire it up to express app (into index.js)

// before executing, we want to make sure:
// 1. user is logged in
const requireLogin = require('../middlewares/requireLogin');
// 2. user has enough credits
const requireCredits = require('../middlewares/requireCredits');

const Survey = mongoose.model('surveys');

// Creating a new survey and send out a big email
module.exports = app => {
	app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
		// 1. req should contain: title, subject, body, recipients
		const { title, subject, body, recipients } = req.body;
		// 2. use them to create a new instance of mongo survey IN MEMORY
		const survey = new Survey({
			title,
			subject,
			body,
			recipients: recipients.split(',').map(email => ({ email: email.trim() })),
			_user: req.user.id,
			dateSent: Date.now()
		});
		// 3. call save on new instance

	});
};