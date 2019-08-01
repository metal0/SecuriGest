const Room = require('../models/room');

const debug = require('debug')('securi-gest:roomController');

/**
 * Função para listagem de salas
 * @param {Request} req - Pedido
 * @param {Response} res - Resposta
 */
exports.room_list = function(req, res) {
	Room.find((err, rooms) => {
		if (err) {
			res.status(400).send();
		} else {
			res.status(200).send(rooms);
		}
	});
};

/**
 * Função para criação de salas
 * @param {Request} req - Pedido
 * @param {Response} res - Resposta
 */
exports.room_create = function(req, res) {
	let roomData = req.body;
	let room = new Room(roomData);

	// Validar existência
	if (room.pavilion && room.number && room.type) {
		Room.count({ pavilion: room.pavilion, number: room.number }).then((count) => {
			if (count) {
				res.status(409).send();
			} else {
				room.save((err, room) => {
					if (err) {
						debug(err);
						res.status(400).send();
					} else {
						res.status(201).send();
					}
				});
			}
		});
	}
};
/**
 * Função para criação de salas
 * @param {Request} req - Pedido
 * @param {Response} res - Resposta
 */
exports.room_update = function(req, res) {
	let roomData = req.body;
	let room = new Room(roomData);

	// Validar existência
	if (room.pavilion && room.number && room.type) {
		Room.count({ pavilion: room.pavilion, number: room.number }).then((count) => {
			if (!count) {
				res.status(409).send();
			} else {
				room.replaceOne((err, room) => {
					if (err) {
						debug(err);
						res.status(400).send();
					} else {
						res.status(201).send();
					}
				});
			}
		});
	}
};
