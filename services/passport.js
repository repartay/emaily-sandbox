const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback'
		},
		(accessToken, refreshToken, profile, done) => {
			User.findOne({ googleId: profile.id })
			.then((existingUser) => {
				if (existingUser){
					// we already have a rec w/ given profile.id
					
				} else {
					// we dont have a user record w/ this profile.id, make new record
					new User({ googleId: profile.id }).save();
				}
			})
			
		}
	)
);

