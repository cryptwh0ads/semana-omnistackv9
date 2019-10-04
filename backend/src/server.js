const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const socketio = require("socket-io");
const http = require("http");

const routes = require("./routes");

const app = express();
const server = htpp.server(app);
const io = socketio(server);

mongoose.connect("", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// TODO: Configurar redis para armazenar os usuarios
const connectedUsers = {};

io.on("connection", socket => {
  // console.log(socket.handshake.query);
  // console.log('Usuario conectado', socket.id);

  const { user_id } = socket.handshake.query;

  connectedUsers[user_id] = socket.id;
});

app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;

  return next();
})

app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);

server.listen(3333);
