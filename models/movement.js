const mongoose = require('mongoose');

const movementSchema = new mongoose.Schema({
	name : {
		type      : String,
		uppercase : true,
		trim      : true,
		required  : true
	},
	type : {
		type     : String,
		trim     : true,
		required : true
	},
	date : { type: Date, default: Date.now }
});

movementSchema.index({ type: 1, number: 1 }, { unique: true });

module.exports = mongoose.model('material', movementSchema, 'movements');
