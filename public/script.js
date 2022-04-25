let socket = io()
let messages = document.querySelector('section ul')
let input = document.querySelector('input')

// THE HANGMAN CHAT GAME
// - - - - - - - - - - CONSTANTES - - - - - - - - - - - - -


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

var amountLetters = selectedWord.length;

// Nu wordt er door het woord (selectedWord.length) geloopt. Voor elk letter van het woord zet het een ' _ '
for (var i = 0; i < selectedWord.length; i++) {
  amountLetters[i] = "_";
  console.log(amountLetters[i]);
}

var remainingLetters = selectedWord.length;

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault()
  socket.emit('message', input.value)

  while (amountLetters > 0) {                                                         // Zolang het aantal letters boven de 0 is
  var guessLetter = input.value                                                       //pakt value van de input
  console.log(guessLetter)

  
      if (guessLetter === null) {                                                     //kijkt of het geraden woord wel bestaat
      break;                                                                          //bestaat het niet? stop dan de loop
      } else if (guessLetter.length !== 1) {                                          //bestaat het wel? ga dan verder
      alert("Please enter a single letter.");
      } else {
    // GAME UPDATE
      for (var j = 0; j < selectedord.length; j++) {
        if (word[j] === guessLetter) {
          amountLetters[j] = guessLetter; amountLetters--;
          
        }
      }
    }
  }

  input.value = ''
})

socket.on('message', message => {
  messages.appendChild(Object.assign(document.createElement('li'), { textContent: message }))
  messages.scrollTop = messages.scrollHeight
})







  



