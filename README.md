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
#### Werkweek III

## API
Voor dit project heb ik gebruik gemaak van een woord API: https://www.wordsapi.com/

## Goals
After finishing this program you can:
- _deal with real-time complexity;_
- _handle real-time client-server interaction;_
- _handle real-time data management;_
- _handle multi-user support._

## Resources
