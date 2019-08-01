const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
	name       : {
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

materialSchema.index({ type: 1, number: 1 }, { unique: true });

module.exports = mongoose.model('material', materialSchema, 'materials');
