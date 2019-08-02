var express = require('express');
var router = express.Router();
const debug = require('debug')('securi-gest:api');

const mongoose = require('mongoose');
const db = `mongodb+srv://${process.env.API_USER}:${process.env.API_KEY}@${process.env.API_URL}/apidb?retryWrites=true`;

const userController = require('../controllers/userController');
const roomController = require('../controllers/roomController');
const materialController = require('../controllers/materialController');

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
router.get('/users/:token', userController.findUser);
// Salas //
router.get('/rooms', roomController.room_list);
router.post('/rooms', roomController.room_create);
router.post('/roomsmodify', roomController.room_update);

// Autenticação //
router.post('/login', authentication.login);
router.post('/recover', authentication.recover);
// Materiais //
router.get('/materials', materialController.material_list);
router.post('/materials', materialController.material_create);
router.put('/materials', materialController.material_update);
router.delete('/materials/:id', materialController.material_delete);
//Requisições//
module.exports = router;
