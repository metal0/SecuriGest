const mongoose = require('mongoose');

const reqitemSchema = new mongoose.Schema({
	number     : {
		type     : Number,
		required : true
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
	concluida  : {
		type : Boolean
	},
	created_on : { type: Date, default: Date.now }
});

reqitemSchema.index({ type: 1, number: 1 }, { unique: true });

module.exports = mongoose.model('reqitem', reqitemSchema, 'reqitems');
