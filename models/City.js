const mongoose = require('mongoose');
const { Schema } = mongoose;
const RestaurantSchema = require('./CityRestaurant');

const citySchema = new Schema ({
	nameCity: String,
	nameState: String,
	uriCity: String,
	uriState: String,
	restaurants: [RestaurantSchema],
	lastUpdated: Date,
	_user: {
		type: Schema.Types.ObjectId, 
		ref: 'User'
	}
});

mongoose.model('cities', citySchema);