const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
	
});

module.exports = mongoose.model('room', userSchema, 'rooms');