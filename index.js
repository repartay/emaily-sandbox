const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();
require('./routes/authRoutes')(app);

// see if underlying env (heroku) has declared what port to use
const PORT = process.env.PORT || 5000;
app.listen(PORT);
