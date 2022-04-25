require('dotenv').config()
const express = require("express");
const app = express();
const http = require('http').createServer(app)
const port = process.env.PORT || 6060;
const io = require('socket.io')(http)


// // The Chatbot
// var builder = require('botbuilder');
// var restify = require('restify');
// // Setup Restify Server
// var server = restify.createServer();

// // Create chat bot
// var connector = new builder.ChatConnector({
//   appId: process.env.MY_APP_ID,
//   appPassword: process.env.MY_APP_PASSWORD
// });

// var bot = new builder.UniversalBot(connector);
// server.post('/api/messages', connector.listen());
// // The bot itself
// bot.dialog('/', function (session) {
//   session.send("Hello World");
// });

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


