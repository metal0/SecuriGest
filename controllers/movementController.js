const Movement = require('../models/movement');

const debug = require('debug')('securi-gest:movementController');

/**
 * Função para listagem de movimentos
 * @param {Request} req - Pedido
 * @param {Response} res - Resposta
 */
exports.movements_list = function(req, res) {
	Movement.find((err, movements) => {
		if (err) {
			res.status(400).send();
		} else {
			res.status(200).send(movements);
		}
	});
};
/**
 * Função para criação de movimentos
 * @param {Request} req - Pedido
 * @param {Response} res - Resposta
 */
exports.movement_create = function(req, res) {
	let movementData = req.body;
	let movement = new Movement(movementData);
	console.log(movement);
	console.log(Movement);
	// Validar existência

	movement.save((err, movement) => {
		if (err) {
			debug(err);
			res.status(400).send();
		} else {
			res.status(201).send();
		}
	});
};
