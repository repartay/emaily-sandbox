const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

// user = mongoose model instance. turned it into id
passport.serializeUser((user, done) => {
	done(null, user.id);
});

// turning an id into a mongoose model instance
passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback', 
			proxy: true
		},
		// refactor to use async/await
		async (accessToken, refreshToken, profile, done) => {
			const existingUser = await User.findOne({ googleId: profile.id });
			if (existingUser){
				// we already have a rec w/ given profile.id
				done(null, existingUser);
			} else {
				// we dont have a user record w/ this profile.id, make new record (async)
				const user = await new User({ googleId: profile.id }).save();
				done(null, user);
			}
		}
	)
);

