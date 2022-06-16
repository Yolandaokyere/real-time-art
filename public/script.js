let socket = io();
let messages = document.querySelector("section ul");
let input = document.querySelector("input");
var form = document.getElementById('form');
// THE HANGMAN CHAT GAME
// - - - - - - - - - - CONSTANTES - - - - - - - - - - - - -

// SVG FILE HANGMAN
var parts = ["head", "torso", "arm-l", "arm-r", "leg-l", "leg-r"];
let pogingen = 0;

// WORD ARRAY
var words = ["test", "cheese", "dog"];

// Pick a random word out of the array of words
var selectedWord = words[Math.floor(Math.random() * words.length)];
console.log(selectedWord);

// Nu wordt er door het woord (selectedWord.length) geloopt. Voor elk letter van het woord zet het een ' _ '
var answerArray = [];
for (var i = 0; i < selectedWord.length; i++) {
  answerArray[i] = "_";
}

var remainingLetters = selectedWord.length;
let answer;
let lives;

// ------------------------ T H E G A M E ---------------------------
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  socket.emit("message", input.value);
  console.log(input.value);

  if (selectedWord.includes(input.value)) {
    console.log("letter geraden!");
    console.log(selectedWord.indexOf(input.value));
    // Answerarray updaten
    answerArray[selectedWord.indexOf(input.value)] = input.value;
    console.log(answerArray);
  } else {
    // Gebruiker heeft het fout we gaan pogingen updaten
    if (pogingen !== 6) {
      pogingen = pogingen + 1;
      if (parts.length > 0) {
        var part = document.getElementById(parts[0]);
        part.style.display = "block";
        parts.shift();
        console.log("fout!");
      }
    } else {
      alert("Game Over");
    }
  }
});

socket.on("message", (message) => {
  messages.appendChild(
    Object.assign(document.createElement("li"), { textContent: message })
  );
  messages.scrollTop = messages.scrollHeight;
});
