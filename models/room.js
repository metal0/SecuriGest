const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
	pavillion  : {
		type      : String,
		uppercase : true,
		trim      : true,
		required  : true
	},
	number     : {
		type     : Number,
		required : true
	},
	type       : {
		type     : String,
		trim     : true,
		required : true
	},
	created_on : { type: Date, default: Date.now }
});

roomSchema.index({ pavillion: 1, number: 1 }, { unique: true });

module.exports = mongoose.model('room', userSchema, 'rooms');
