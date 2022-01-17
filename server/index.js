const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const {Server} = require('socket.io');
const port = 3001;
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
}) 

io.on("connection", (socket) => {
    console.log(socket.id);

  socket.on("disconnect", () => {
    console.log(`user disconnected ${socket.id}`)
  })
}) 

app.listen(port, () => {
  console.log('Server Running....');
})

