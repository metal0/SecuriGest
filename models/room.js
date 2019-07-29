const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
	pavilion   : {
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

roomSchema.index({ pavilion: 1, number: 1 }, { unique: true });

module.exports = mongoose.model('room', roomSchema, 'rooms');
