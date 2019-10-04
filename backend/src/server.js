const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const socketio = require('socket-io');
const http = require('http');

const routes = require('./routes');

const app = express();
const server = htpp.server(app);
const io = socketio(server);

io.on('connection', socket => {
  console.log('Usuario conectado', socket.id);
});

mongoose.connect('', {
  useNewUrlParser : true,
  useUnifiedTopology: true,
})

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..','uploads')))
app.use(routes);

server.listen(3333);