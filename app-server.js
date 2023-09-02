const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');
const { getPexelsData } = require('./pexel-server');

const pexelsData = getPexelsData();
console.log(pexelsData);

/* Middleware */
app.use(express.json());
//app.use(pexelServer)
app.use(express.static('public'));

app.use((req, res, next) => {
	res.locals.data = {};
	next();
});

const pixelMiddleware = (async (req, res, next) => {
	try {
		const pexelsData = await getPexelsData();
		console.log(pexelsData);
		res.locals.pexelsData = pexelsData;
		next();
	} catch (error) {
		res.locals.pexelsData = null;
		next(error);
	}
});

app.use(require('./config/checkToken'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/items', require('./routes/api/items'));
app.use('/api/orders', require('./routes/api/orders'));

app.get('/pexels', pixelMiddleware, (req, res) => {
	const { pexelsData } = res.locals;
	if (!pexelsData) {
		res.status(500).json({ error: 'Failed to fetch Pexels data' });
		return;
	}
	res.json(pexelsData);
});

app.get('*', (req, res) => {
	res.sendFile(path.resolve(path.join(__dirname, 'public', 'index.html')));
});

module.exports = app;
