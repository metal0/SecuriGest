const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	email      : {
		type      : String,
		lowercase : true,
		trim      : true,
		index     : { unique: true },
		required  : true
	},
	password   : { type: String, required: true },
	created_on : { type: Date, default: Date.now }
});

module.exports = mongoose.model('user', userSchema, 'users');
