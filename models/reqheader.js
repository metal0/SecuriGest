const mongoose = require('mongoose');

const reqheaderSchema = new mongoose.Schema({
	name       : { type: String, required: true },
	number     : {
		type     : Number,
		required : true
	},
	concluida  : {
		type : Boolean
	},
	created_on : { type: Date, default: Date.now }
});

reqheaderSchema.index({ type: 1, number: 1 }, { unique: true });

module.exports = mongoose.model('reqheader', reqheaderSchema, 'reqheaders');
