const express = require('express');
const routes = require('./routes');

const app = express();

// GET, POST, PUT, DELETE

// req.query => Acessar query params (para filtros)
// req.params => Acessar route params (para edicao, delete)
// req.body => Acessar corpo da requisicao (para criacao, edicao)

app.use(express.json());
app.use(routes);

app.listen(3333);