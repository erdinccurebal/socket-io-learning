"use strict";

// ! Main Modules
const express = require("express");
const socket = require("socket.io");

// ! Server Options
const port = process.env.PORT || "80";
const ioSecretKey = "65s4a65sSd9a";

// ! Express Application
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

const server = app.listen(port, () => {
  console.log("Server listening | PORT: " + port);
  console.log("IO Secret Key: " + ioSecretKey);
});

// ! IO Application
const io = socket(server);

// ! IO ON
io.on("connection", (socket) => {
  console.log("Connect user | Socket ID: " + socket.id);
  socket.on("disconnect", () => {
    console.log("Disconnect user | Socket ID: " + socket.id);
  });
  socket.on("pusher", data => {
    io.sockets.emit("pusher", data);
  })
});