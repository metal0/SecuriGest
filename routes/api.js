var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const debug = require('debug')('securi-gest:server');

const mongoose = require('mongoose');
const db = `mongodb+srv://${process.env.API_USER}:${process.env.API_KEY}@${process.env.API_URL}/apidb?retryWrites=true`;

// Models
const User = require('../models/user');

// Ligar à base de dados
mongoose.connect(db, err => {
	if (err) {
		debug(err);
	} else {
		debug('Connected to MongoDB');
	}
});

function verifyToken(req, res, next) {
	if (!req.headers.authorization) {
		return res.status(401).send();
	}
	let token = req.headers.authorization.split(' ')[1];
	if (token === 'null') {
		return res.status(401).send();
	}

	let payload = jwt.verify(token, process.env.TOKEN_SECRET || 'secretKey');
	if (!payload) {
		return res.status(401).send();
	}
	console.log(payload);
	req.userId = payload.subject;
	next();
}

router.get('/', function(req, res, next) {
	res.send('Bem-vindo à API da SecuriGest');
});

router.get('/users', verifyToken, (req, res) => {
	User.find((err, users) => {
		if (err) {
			res.status(400).send();
		} else {
			res.status(200).send(users);
		}
	});
});

router.post('/register', (req, res) => {
	let userData = req.body;
	let user = new User(userData);

	// Validar existência de email
	if (user.email) {
		User.count({ email: user.email }).then(count => {
			if (count) {
				res.status(409).send();
			} else {
				user.save((err, user) => {
					if (err) {
						console.log(err);
						res.status(400).send();
					} else {
						let payload = { subject: user._id };
						let token = jwt.sign(payload, process.env.TOKEN_SECRET || 'secretKey');
						res.status(200).send({ token });
					}
				});
			}
		});
	}
});

router.post('/login', (req, res) => {
	let userData = req.body;

	User.findOne({ email: userData.email }, (err, user) => {
		if (err) {
			console.log(err);
		} else {
			if (!user) {
				res.status(401).send('Utilizador inválido');
			} else if (user.password !== userData.password) {
				res.status(401).send('Palavra-chave inválida');
			} else {
				let payload = { subject: user._id };
				let token = jwt.sign(payload, process.env.TOKEN_SECRET || 'secretKey');
				res.status(200).send({ token });
			}
		}
	});
});

module.exports = router;
