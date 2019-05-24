const Room = require('../models/room');

const debug = require('debug')('securi-gest:roomController');

// Mostrar listagem de salas
exports.room_list = function(req, res) {
	Room.find((err, rooms) => {
		if (err) {
			res.status(400).send();
		} else {
			res.status(200).send(rooms);
		}
	});
};
