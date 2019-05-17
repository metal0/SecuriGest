var express = require('express');
var router = express.Router();
const debug = require('debug')('securi-gest:api');

const mongoose = require('mongoose');
const db = `mongodb+srv://${process.env.API_USER}:${process.env.API_KEY}@${process.env.API_URL}/apidb?retryWrites=true`;

const userController = require('../controllers/userController');

const middleware = require('../middlewares/authentication');
const authentication = require('../helpers/authentication');

// Ligar à base de dados
mongoose.connect(db, (err) => {
	if (err) {
		debug(err);
	} else {
		debug('Connected to MongoDB');
	}
});

router.get('/', function(req, res, next) {
	res.send('Bem-vindo à API da SecuriGest');
});

// Utilizadores //
router.get('/users', middleware.verifyToken, userController.user_list);
router.post('/users', userController.user_create);

// Autenticação //
router.post('/login', authentication.login);
router.post('/recover', authentication.recover);

module.exports = router;
