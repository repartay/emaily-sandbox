const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

// generated from Google API dev console
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback'
		},
		(accessToken, refreshToken, profile, done) => {
			console.log('access token', accessToken);
			console.log('refresh token', refreshToken);
			console.log('profile', profile);
		}
	)
);

// route handler for oauth pt1, that puts user into passport flow
app.get(
	'/auth/google', 
	passport.authenticate('google', {
		scope: ['profile', 'email']
	})
);
// route handler for oauth pt2, exchanges code for user profile info
app.get(
	'/auth/google/callback',
	passport.authenticate('google')
);

// see if underlying env (heroku) has declared what port to use
const PORT = process.env.PORT || 5000;
app.listen(PORT);
