var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var compression = require('compression');

var api = require('./routes/api');

var app = express();

// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: 'false' }));
app.use(compression());

// Back-end (Routing do Express)
app.use('/api', api);

// Front-end (Routing do Angular)
app.use(express.static(path.join(__dirname, 'dist/securi-gest')));
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/securi-gest/index.html'));
});

// app.use('/login', login);

module.exports = app;
