# HANG-CHAT
Met de Hang-Chat game speel je het klassieke spel galgje in een online chatroom. Hierbij moet je een woord raden van individuele letters. Als speler mag je een beperkt aantal fouten maken. De fouten worden weergeven door een galg met daaraan een hangend mannetje, welk per fout steeds meer lichamelijk onderdelen krijgt; het hoofd, lijf, linker-arm, rechter-arm, linker-been en rechter-been. In totaal heb je dus 6 pogingen.

![image](https://user-images.githubusercontent.com/97689634/174070493-f11d78ac-5f5d-44d7-b257-268bfe702155.png)

## Table of Contents
- [Live Demo](#livedemo)
- [Features](#features)
- [Process](#process)
- [API](api)
- [Goals](#goals)
- [Resources](#resources)

## Live Demo
Speel dit spel samen of in je eentje op x..

## Features
Lorem ipsum blabla

## Process
### 🧠Inspiratie
In de eerste week hadden we gezamenlijk een online chatroom gebouwd waarin je met elkaar real time kunt chatten. Het leek mijn een leuk idee om het oude klassieke spelletje, galgje te verwerken in de realtime chatroom. Met behulp van [dit document](https://nostarch.com/download/JS4K_ch7.pdf) heb ik het spel weer tot leven gewekt. 
### :construction_worker:De bouw
#### Werkweek I
In de eerste week heb ik de basis van het spel in elkaar gezet. Als test heb ik een array gemaakt van in totaal 3 woorden. Bij elk nieuw spel wordt er een random woord uit de array gepikt. Van het gekozen woord wordt er nog een keer geloopt. Voor elk letter van het woordt komt er een streepje, zo weet de speler uit hoeveel letters het woord bestaat. Voor elk  geraden letter wordt het streepje vervangen door het letter. En als er niet goed geraden is komt er een onderdeel van het poppetje tevoorschijn. 
``` ruby
var words = ["test", "cheese", "dog"];

var selectedWord = words[Math.floor(Math.random() * words.length)];
for (var i = 0; i < selectedWord.length; i++) {
  answerArray[i] = "_";
}

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
```
![hangman week 1](https://user-images.githubusercontent.com/97689634/174082663-f03e47da-92df-43a2-9601-c44958860727.png)

#### Werkweek II
In werkweek 2 heb ik de woorden vervangen met de titels van een film. De data is gefetch van een movie database API.
Hieruit kwam er veel informatie uit de data rollen (zie foto).
Met de map methode heb ik enkel de informatie uitgehaald die ik wil gebruiken voor het galgje spel
``` ruby
  fetch(endpoint)
  .then(res => res.json())
  .then(json => {
  
  const {results} = json;
  const titles = results.map(result => result.title)
  ```
  ![hangman api info](https://user-images.githubusercontent.com/97689634/174736531-82d44121-3931-44c4-b00b-22fec512ab7e.png)

Vervolgens moest de data verstuurt worden van de server(main.js) naar de client(script.js). Dit kon door een routie aan te maken. ```router.get('/words', (req, res) =>``` Een ander optie was om het script in een EJS file te verplaatsen. Vervolgens is de data opnieuw gefetch in script.js om deze op te halen:
``` ruby
fetch("/words")
  .then((data) => data.json())
  .then((data) => {
   ```
In werkweek 1 was het spel nog niet helemaal compleet. Bij een woord als 'cheese' waar 2 keer de letter 'e' zich in het woord bevindt werd enkel de letter 'e' in answerArray geplaats. Dit kwam doordat het niet door het geselecteerde woord loopte. Dit is verbeterd door een loop op het geselecteerde woord te plaatsen. Op de afbeelding zie je bij het woord 'spiderman - no way home' wordt geloopt door het woord en de letter 'a' dus in answerArray wordt geplaats.
``` ruby
const selectedWordArray = selectedWord.split("");

for (let i = 0; i < selectedWordArray.length; i++) {
        if (input.value === selectedWordArray[i]) {
          console.log("letter geraden!");
          // Answerarray updaten
          answerArray[i] = input.value;
          console.log(answerArray);
        }
      }
 ```
 ![hangman loop verbeterd](https://user-images.githubusercontent.com/97689634/174742342-124380d5-b34f-45c1-a4e8-68e90f82843e.png)

#### Werkweek III
Deze werkweek wou ik op de juiste manier gebruik maken van sockets. Echter was het ingewikkeld om deze toe te passen op het spel zelf.
De spelers zijn realtime verbonden met de chat maar niet met het spel. Ieder speler speelt dus individueel het spel.
## Data-Lifecycle
## API
Voor dit project heb ik gebruik gemaak van een movie database API:[themovieDB](https://developers.themoviedb.org/3/getting-started/introduction)

## MoSCoW
### Must
- [x] Working app on Heroku
- [x] Documented Readme.
- [ ] Data-lifecycle
- [x] Real time events
- [x] API
- [x] Using Socket.io events
- [x] Client-server interaction
- [x] Data management
- [ ] Multi user support
- [ ] GAME logic 
     - [x] Alert when user loses
     - [ ] Alert when user wins
     - [x] Show correct guesses in game
     - [x] Show wrong guesses in game with hangman
     - [ ] Remove blank spaces in the to guess movie title
     
### Should
- [ ] UI stack
- [ ] Convert the calling string value to lower case

### Could
- [ ] Choose different Theme

### Would
- [ ] Show how many lifes user has left
 

## Goals
After finishing this program you can:
- _deal with real-time complexity;_
- _handle real-time client-server interaction;_
- _handle real-time data management;_
- _handle multi-user support._

## Resources
