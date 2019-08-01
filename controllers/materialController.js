const Material = require('../models/material');

const debug = require('debug')('securi-gest:materialController');

/**
 * Função para listagem de materiais
 * @param {Request} req - Pedido
 * @param {Response} res - Resposta
 */
exports.material_list = function(req, res) {
	Material.find((err, materials) => {
		if (err) {
			res.status(400).send();
		} else {
			res.status(200).send(materials);
		}
	});
};

/**
 * Função para criação de materiais
 * @param {Request} req - Pedido
 * @param {Response} res - Resposta
 */
exports.material_create = function(req, res) {
	let materialData = req.body;
	let material = new Material(materialData);
	console.log(material);
	console.log(Material);
	// Validar existência
	if (material.name && material.number && material.type) {
		Material.count({ type: material.type, number: material.number }).then((count) => {
			if (count) {
				res.status(409).send();
			} else {
				material.save((err, material) => {
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
 * Função para apagar materiais
 * @param {Request} req - Pedido
 * @param {Response} res - Resposta
 */
exports.material_delete = function(req, res) {
	let materialData = req.body;
	let material = new Material(materialData);
	console.log(material);
	console.log(Material);
	// Validar existência
	if (material.name && material.number && material.type) {
		Material.count({ type: material.type, number: material.number }).then((count) => {
			if (count) {
				res.status(409).send();
			} else {
				material.remove((err, material) => {
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
