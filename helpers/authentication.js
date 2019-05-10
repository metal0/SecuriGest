const User = require('../models/user');

const debug = require('debug')('securi-gest:authentication');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

/**
 * Função de autenticação de um utilizador.
 * O processo é efetivado através da validação
 * das credenciais recebidas e posterior
 * geração de um token.
 * @param {Request} req - Pedido
 * @param {Response} res - Resposta
 */
exports.login = function(req, res) {
	let userData = req.body;

	User.findOne({ email: userData.email }, (err, user) => {
		if (err) {
			res.status(404).send();
			debug(err);
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
};

/**
 * Função de recuperação da palavra-passe
 * por email.
 * O envio de email é assegurado através do módulo
 * NodeMailer.
 * @param {Request} req - Pedido
 * @param {Response} res - Resposta
 */
exports.recover = function(req, res) {
	let userData = req.body;
	let user = new User(userData);

	User.findOne({ email: userData.email }, (err, user) => {
		if (err) {
			res.status(404).send();
			debug(err);
		} else {
			if (!user) {
				res.status(404).send();
			} else {
				var mailOptions = {
					from    : `SecuriGest Support <${process.env.GMAIL_MAIL}>`,
					to      : user.email,
					subject : 'Recuperação de palavra-passe',
					text    : `Palavra-passe: ${user.password}`,
					html    : `<p>Olá!</p><p>Pediste a recuperação da tua palavra-passe.</p><p>Palavra-passe: ${user.password}</p>`
				};
				var transporter = nodemailer.createTransport({
					service : 'gmail',
					auth    : {
						user : process.env.GMAIL_MAIL,
						pass : process.env.GMAIL_PASS
					}
				});
				transporter.sendMail(mailOptions, (err, info) => {
					if (err) {
						res.status(500).send();
						return debug(err);
					} else {
						res.status(200).send();
						debug(JSON.stringify(res));
					}
				});
			}
		}
	});
};
