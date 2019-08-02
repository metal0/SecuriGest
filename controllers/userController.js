const User = require('../models/user');

const debug = require('debug')('securi-gest:userController');
const jwt = require('jsonwebtoken');

/**
 * Função para listagem de utilizadores
 * @param {Request} req - Pedido
 * @param {Response} res - Resposta
 */
exports.user_list = function(req, res) {
	User.find((err, users) => {
		if (err) {
			res.status(400).send();
		} else {
			res.status(200).send(users);
		}
	});
};

/**
 * Função para criação de utilizadores
 * @param {Request} req - Pedido
 * @param {Response} res - Resposta
 */
exports.user_create = function(req, res) {
	let userData = req.body;
	let user = new User(userData);

	// Validar existência de nome
	if (user.email) {
		User.count({ email: user.email }).then((count) => {
			if (count) {
				res.status(409).send();
			} else {
				user.save((err, user) => {
					if (err) {
						debug(err);
						res.status(400).send();
					} else {
						let payload = { subject: user._id };
						let token = jwt.sign(payload, process.env.TOKEN_SECRET || 'secretKey');
						res.status(201).send({ token });
					}
				});
			}
		});
	}
};

/**
 * Função para listagem de utilizadores
 * @param {Request} req - Pedido
 * @param {Response} res - Resposta
 */
exports.findUser = function(req, res) {
	let token = req.params.token;
	let payload = jwt.verify(token, process.env.TOKEN_SECRET || 'secretKey');
	if (!payload) {
		res.status(401).send();
	} else {
		User.findById(payload.subject, (err, user) => {
			if (err) {
				res.status(404).send();
				debug(err);
			} else {
				if (!user) {
					res.status(401).send('Utilizador inválido');
				} else {
					res.status(200).send({});
				}
			}
		});
	}
};
