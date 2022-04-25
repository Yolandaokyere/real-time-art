let socket = io()
let messages = document.querySelector('section ul')
let input = document.querySelector('input')

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault()
  if (input.value) {
    socket.emit('message', input.value)
    input.value = ''
  }
})

socket.on('message', message => {
  messages.appendChild(Object.assign(document.createElement('li'), { textContent: message }))
  messages.scrollTop = messages.scrollHeight
})


// THE HANGMAN CHAT GAME
// SVG FILE HANGMAN
var parts = ["head", "torso", "arm-l", "arm-r", "leg-l", "leg-r"];
// WORD ARRAY
var words = ["test", "cheese", "dog"];
console.log(words);
// SHOW the 'words'
    // window.alert(words);
// Pick a random word out of the array of words
var selectedWord = words[Math.floor(Math.random() * words.length)];
console.log(selectedWord);




