const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send({ hi: 'there' });
});

// see if underlying env (heroku) has declared what port to use
const PORT = process.env.PORT || 5000;

app.listen(PORT);
