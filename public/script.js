let socket = io();
let messages = document.querySelector("section ul");
let input = document.querySelector("input");
var form = document.getElementById("form");
// THE HANGMAN CHAT GAME
// - - - - - - - - - - CONSTANTES - - - - - - - - - - - - -

// SVG FILE HANGMAN
var parts = ["head", "torso", "arm-l", "arm-r", "leg-l", "leg-r"];
let pogingen = 0;

// WORD ARRAY

// Fetchen naar de nieuwe route '/words'
fetch("/words")
  .then((data) => data.json())
  .then((data) => {
    // data is een object. in het object data, zit een property called data. Die geven we een andere naam, words
    var { data: words } = data;

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

      // Het woord in een array plaatsen
      const selectedWordArray = selectedWord.split("");
      //b
      // ['t','e','s','t']


      // Loopen door het woord
      for (let i = 0; i < selectedWordArray.length; i++) {
        // als het geraden letter voorkomt in het woord, update answerarray
        if (input.value === selectedWordArray[i]) {
          console.log("letter geraden!");
          // Answerarray updaten
          answerArray[i] = input.value;
          console.log(answerArray);
        }
      }

      // Fout antwoord
      if (!selectedWord.includes(input.value)) {
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
  });

socket.on("message", (message) => {
  input.value = "";
  messages.appendChild(
    Object.assign(document.createElement("li"), { textContent: message })
  );
  messages.scrollTop = messages.scrollHeight;
});
