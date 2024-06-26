const mongoose = require('mongoose');

const tvShowSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('TVShow', tvShowSchema);