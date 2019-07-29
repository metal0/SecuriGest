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

	// Validar existência de email
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
