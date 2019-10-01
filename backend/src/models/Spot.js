const mongoose = require('mongoose');

// Estrutura do Usuario
const SpotSchema = new mongoose.Schema({
    thumbnail: String, // Colunas da minha tabela
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Spot', SpotSchema);