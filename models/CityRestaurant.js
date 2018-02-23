const mongoose = require('mongoose');
const { Schema } = mongoose;

const restaurantSchema = new Schema ({
	name: String,
	category: String,
	phoneNumber: String,
	website: String,
	linkYelp: String,
	linkFb: String
});

module.exports = restaurantSchema;