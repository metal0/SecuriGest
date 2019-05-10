const jwt = require('jsonwebtoken');

/**
 * Função de validação de uma sessão.
 * A validação é realizada através do
 * método Verify() do módulo
 * JSONWebToken.
 * @param {Request} req - Pedido
 * @param {Response} res - Resposta
 * @param {NextFunction} next - Próximo pedido
 */
exports.verifyToken = function(req, res, next) {
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
	req.userId = payload.subject;
	next();
};
