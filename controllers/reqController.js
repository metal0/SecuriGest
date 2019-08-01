const ReqHeader = require('../models/reqheader');
const ReqItem = require('../models/reqitem');

const debug = require('debug')('securi-gest:reqController');

/**
 * Função para listagem de cabeçalhos de Requisições
 * @param {Request} req - Pedido
 * @param {Response} res - Resposta
 */
exports.reqHeader_list = function(req, res) {
	ReqHeader.find((err, reqHeader) => {
		if (err) {
			res.status(400).send();
		} else {
			res.status(200).send(reqHeader);
		}
	});
};
/**
 * Função para listagem de itens de Requisições
 * @param {Request} req - Pedido
 * @param {Response} res - Resposta
 */
exports.reqItem_list = function(req, res) {
	ReqHeader.find((err, reqItem) => {
		if (err) {
			res.status(400).send();
		} else {
			res.status(200).send(reqItem);
		}
	});
};
/**
 * Função para criação de requisições
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
