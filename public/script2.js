//                                     ******* THE GAME SETUP! *******
// words for the Game
// var words = [
//   'play', 'notification', 'javascript', 'amogus', 'abobus', 'kitty', 'squid', 'hangman', 'update', 'pizza', 'hamburger', 'display',
//   'popit', 'circle', 'france', 'james', 'jonny', 'assassin', 'country', 'altair', 'sirius', 'potter', 'window', 'update', 'delete', 'metallica',
//   'austria', 'ukraine', 'select', 'italia', 'romania', 'england', 'scotland', 'india', 'subscribe', 'hurricane', 'marshall', 'undefined', 'triangle',
//   'soviet', 'republic', 'empire', 'kingdoom', 'principiality', 'space', 'studio', 'music', 'subnatica', 'underground', 'correct', 'germany', 'witcher',
//   'rammstein', 'geralt', 'lindemann', 'october', 'august', 'april','overlord', 'stalin', 'adolf', 'rocker', 'darkness', 'upper', 'lower', 'github',
//   'winston', 'paris','ludendorf', 'separatist', 'january', 'february', 'december', 'november', 'revolution', 'communism', 'socialism', 'democratica',
//   'function', 'nightwish', 'marvel', 'geforce', 'dota', 'croatia', 'slovenia', 'slovakia', 'czechoslovakia', 'poland', 'belgium', 'luxemburg',
//   'turkey','container', 'mathematic', 'ambulance', 'romanov', 'suleiman', 'nikolay', 'leonardo', 'florencia', 'auditore', 'stupid', 'tiktok','facebook',
//   'instagramm','vkontakte','motherland', 'napoleon', 'alexander','document', 'letter', 'word', 'vendetta', 'occupation', 'annex', 'finland', 'score',
//   'master', 'puppet', 'powerwolf', 'slayer', 'slash', 'belarus', 'benin', 'summer', 'octoberfest', 'portugal', 'venesuela', 'vietham', 'greece','steam',
//   'vesemir', 'kaedwen', 'nilfgaard', 'aedirn', 'cintra', 'cidaris', 'rivia','livia','egypt', 'persia', 'ireland', 'iceland', 'canada', 'china', 'korea',
//   'latvia', 'estonia', 'madagascar', 'mexico', 'bucharest', 'budapest','frankfurt','monako', 'mongol', 'japan', 'netherland', 'pakistan',
//   'senegal', 'serbia', 'bosnia', 'herzegovina', 'america', 'tailand', 'togoland', 'colonia', 'octavian','severus','septima', 'borgia', 'montain', 'river',
//   'winter', 'vatican', 'greenland', 'travel', 'random', 'imposter', 'guitar', 'fender', 'gibson', 'murmansk', 'world', 'hello', 'bulgaria', 'volga','argentina',
//   'banrain', 'burundi', 'ecuador', 'brazilia', 'gibraltar','guatemala','skellige', 'explorer', 'telecaster', 'stratocaster', 'sherlock', 'novus','candy', 'hungary',
//   'kenya', 'macedonia', 'ferdinand', 'style', 'moldova', 'holland', 'district', 'cordoba', 'cloud', 'apple', 'samsung', 'motobike', 'bicycle', 'sweden', 'escape',
//   'brotherhood', 'revelation', 'istambul', 'constantin', 'syria', 'taiwan', 'uganda', 'virtual', 'speaker', 'cruella', 'clothe', 'united', 'syndicate',
//   'snickers', 'airplane', 'uruguay', 'train', 'crazy', 'anton', 'edison', 'osman', 'never', 'witch', 'skills', 'viverna', 'endriaga', 'neron', 'autumn',
//   'cybertron', 'transformers', 'khan', 'arabia', 'saudi', 'ozzy', 'joker', 'batman', 'covid', 'virus', 'paper', 'donatella', 'rafael','badcomedian', 'final',
//   'countdown', 'again', 'machine', 'anime', 'discovery', 'multiplayer', 'clock', 'lightsaber', 'anakin', 'spitfire', 'firefly', 'notepad', 'millenium', 'plague',
//   'moscow', 'petersburg', 'cappadocia', 'saturday', 'nightmare', 'wonderful', 'isolation', 'normandia', 'singleplayer', 'fortnite', 'ubisoft', 'netflix',
//   'prussia', 'illyria', 'frederick', 'dreamland', 'steamland', 'mouseclick', 'keydown', 'keyup', 'profiler', 'firewall', 'moonlight', 'converse',
//   'brussel', 'strasburg', 'gangsta', 'paradise', 'railway', 'berlin', 'hellraiser', 'valencia', 'federation', 'confederation', 'galatiic', 'fireplace',
//   'vallonia', 'flandria', 'bitbox', 'audio', 'computer', 'playstation', 'mandarin', 'sturgeon', 'darknest', 'splice', 'coffescript', 'typescript', 'legendary'
// ];
var words = ['test']
// *** Game Setup! ***
var letters = document.getElementById("letters");
var prompt = document.getElementById("prompt");
var guessEl = document.getElementById("guess");
var guessWord = document.getElementById("guessWord");
var button = document.getElementById("go");
// Hangman itself 
var parts = ["head", "torso", "arm-l", "arm-r", "leg-l", "leg-r"];

// picks a word at random
var word = words[Math.floor(Math.random() * words.length)];

// give me a list of empty letters for the word
var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}
// how many letters are left?
var remainingLetters = word.length;

// *** Game Loop! ***
// while there are still letters to guess
letters.innerHTML = answerArray.join(" ");
var guess;
var answer;

if (remainingLetters > 0) {
  var submission = () => {
    guess = guessWord.value;
    var existingLetters = remainingLetters;

    if (guess.length !== 1) {
      alert("Please enter a single letter");
    } else {
      //update the game state with the guess
      for (var j = 0; j < word.length; j++) {
        // if they were correct
        if (word[j] === guess) {
          answerArray[j] = guess;
          letters.innerHTML = answerArray.join(" ");
          remainingLetters--;
        }
      }

      // otherwise they got it wrong!
      if (existingLetters === remainingLetters) {
        if (parts.length > 0) {
          var part = document.getElementById(parts[0]);
          part.style.display = "block";
          parts.shift();
        }
        else {
          alert("GAME OVER you lost hehehehe");
        }
      }

      // after you're done with everything, remove the letter from the input
      guessWord.value = "";
    }
  };
  // Functie van de 'Go-button'
  button.addEventListener('click', submission, false)
  guessWord.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      submission()
    }
  }, true)
}

if (remainingLetters === 0) {
  letters.innerHTML = answerArray.join(" ");
  alert("Good job! The answer was " + word);
}

