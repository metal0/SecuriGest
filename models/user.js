const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		lowercase: true,
		trim: true,
		index: { unique: true },
		required: true
	},
	password: { type: String, required: true },
	created_on: { type: Date, default: Date.now },
	name:{type:String ,required: true},
	biography: {type:String},
	img: { data: Buffer, contentType: String },
	calendar: {type:String},//MUDAR O TIPO
	birthDate:{ type: Date}
});

module.exports = mongoose.model('user', userSchema, 'users');
