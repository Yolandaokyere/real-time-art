require('dotenv').config()
const express = require("express");
const app = express();
const http = require('http').createServer(app)
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const port = process.env.PORT || 6060;
const io = require('socket.io')(http)
// THE MOVIE DATABASE API
const API_MOVIEDB_KEY = process.env.API_KEY
const RESULTS_PAGES = 1
const endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${API_MOVIEDB_KEY}` 
// const urlendpointt}

const router = new express.Router() // Extra router om data te sturen naar script.js
console.log(endpoint);


app.set("view engine", "ejs");
app.set("views", "./views");
app.use(router); //Vertel Express dat we een extra router willen gebruiken
app.use(express.static("public"));

// Nieuwe endpoints '/words' die titles verstuurd naar de client
router.get('/words', (req, res) => {
  // Fetch data
  fetch(endpoint)
  .then(res => res.json())
  .then(json => {
 
 const {results} = json;
//  map functie returned een nieuwe array met alleen de titles
 const titles = results.map(result => result.title)
 
//  Verstuur de data (titles) naar script.js
 res.send({data: titles})
})
});

app.get("/", function (request, response) {
  //  stuurt titlesdata naar de client
 response.render('index')  
  })


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


