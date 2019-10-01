const mongoose = require('mongoose');

// Estrutura do Usuario
const UserSchema = new mongoose.Schema({
    email: String // Colunas da minha tabela
});

module.exports = mongoose.model('User', UserSchema);