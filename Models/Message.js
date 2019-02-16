const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
	messId: String,
	message: Object,
	sender: String,
	receiver: String,
	date: String
})


module.exports = mongoose.model('Message', messageSchema);