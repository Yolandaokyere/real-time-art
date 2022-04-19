require('dotenv').config()
const express = require("express");
const app = express();
const http = require('http').createServer(app)
const port = process.env.PORT || 6060;
const io = require('socket.io')(http)

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));

app.get("/", function (request, response) {
    response.render('index')
});

io.on('connection', (socket) => {
    console.log('a user (socket.io-client) is connected')
  
    socket.on('message', (message) => {
      io.emit('message', message)
    })
  
    socket.on('disconnect', () => {
      console.log('a user (socket.io-client) is disconnected')
    })
})

http.listen(port, () => {
  console.log(`App is on ${port}`);
});


