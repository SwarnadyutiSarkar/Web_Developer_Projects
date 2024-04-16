const mongoose = require('mongoose');
const conversationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
});

module.exports = mongoose.model('Conversation', conversationSchema);