/* Copyleft 2013, all wrongs reversed */
/*jslint browser: true*/
/*globals console*/

(function () {
    'use strict';
    // Helper functie om het boek te kunnen gebruiken
    var print = function () {
        var i;
        for (i = 0; i < arguments.length; i += 1) {
            console.log("<" + typeof (arguments[i]) + "> " + arguments[i]);
        }
    };

// Hier onder jouw code
// ------------------------------
// Versie: 1.0 - 05-03-2013
// Door: Bianca van der Werf
// Functie: Voed je eigen draak op en kijk welke kleur en gedrag hij krijgt.

//Question 1
var endScore = 0;
var myInput = "";
var validInput = false;
var randomNumber = Math.floor(Math.random()*3)
    
while(validInput === false) {     // [lb] gebruik liever "while( !validInput )" immers: als validInput ==== false, dan !validInput === true
  myInput = prompt("Are you a boy or a girl?");
  if(myInput.toLowerCase() === "boy") {
    validInput = true;
    endScore = endScore + 2;
  }
  else if(myInput.toLowerCase() === "girl") {
    validInput = true;
    endScore = endScore + 0;
  }
  else alert("Please enter boy or girl.");
}
validInput = false;

//Question 2
while(validInput === false) {     
  myInput = prompt("On one of your mushroom hunts you come across a cave you have never seen before. You carefully enter it and soon find a silver egg as big as your head on a straw bed. What will you do?\n\na: Decide to hatch the egg\nb: Leave the egg alone");
  if(myInput.toLowerCase() === "a") {
    validInput = true;
  }
  else if(myInput.toLowerCase() === "b") {
    alert("Something keeps you from leaving.. Are you sure you should walk away now?")
  }
  else alert("Please enter a or b");
}
validInput = false;

//Question 3
while(validInput === false) {
  myInput = prompt("You pick up the egg carefully and bring it outside the cave. What will you do?\n\na: Hatch the egg on the beach\nb: Hatch the egg in your bed\nc: Hatch the egg in a cooking pot above the fire");
  if(myInput.toLowerCase() === "a") {
    validInput = true;
    endScore = endScore + 1;
  }
  else if(myInput.toLowerCase() === "b") {
    validInput = true;
    endScore = endScore + 0;
  }
  else if(myInput.toLowerCase() === "c") {
    validInput = true;
    endScore = endScore + 3;
  }      
    else alert("Please enter a, b or c.");
}    
validInput = false;

//Question 4
while(validInput === false) {
  myInput = prompt("It takes a day of waiting, but finally the egg hatches! A little dragon stumbles outside it’s egg and looks at you with hungry eyes. What will you do?\n\na: Teach it to find mushrooms \nb: Teach it to hunt on mammals\nc: Teach it to fish ");
  if(myInput.toLowerCase() === "a") {
    validInput = true;
    endScore = endScore + 0;
  }
  else if(myInput.toLowerCase() === "b") {
    validInput = true;
    endScore = endScore + 2;
  }
  else if(myInput.toLowerCase() === "c") {
    validInput = true;
    endScore = endScore + 1;
  }      
    else alert("Please enter a, b or c.");
}    
validInput = false;

//Random Question 5
if (randomNumber === 0) {
  while(validInput === false) {
    myInput = prompt("Your dragon falls asleep, what will you do?\n\na: Leave the dragon alone\nb: Pet the dragon");
    if(myInput.toLowerCase() === "a") {
      validInput = true;
      endScore = endScore + 1;
    }
    else if(myInput.toLowerCase() === "b") {
      validInput = true;
      endScore = endScore + 0;
    }   
    else alert("Please enter a or b");
  } 
}   
else if (randomNumber === 1) {
  while(validInput === false) {
    myInput = prompt("Your dragon caught a bunny, what will you do?\n\na: Praise the dragon\nb: Scold the dragon");
    if(myInput.toLowerCase() === "a") {
      validInput = true;
      endScore = endScore + 1;
    }
    else if(myInput.toLowerCase() === "b") {
      validInput = true;
      endScore = endScore + 2;
    }   
    else alert("Please enter a or b");
  }
}
else if (randomNumber === 2) {
  while(validInput === false) {
    myInput = prompt("Your dragon bit you, what will you do?\n\na: Praise the dragon\nb: Discipline the dragon");
    if(myInput.toLowerCase() === "a") {
      validInput = true;
      endScore = endScore + 0;
    }
    else if(myInput.toLowerCase() === "b") {
      validInput = true;
      endScore = endScore + 2;
    }   
    else alert("Please enter a or b");
  }
}
validInput = false;

//Result
if (endScore === 0) {
  document.write("Pink dragon<br>");
  document.write("<img border='0' src='http://i1195.photobucket.com/albums/aa387/MyDragonCave/Adults/PinkMale.gif' /><br>");
  document.write("Your dragon grew out to be a pink dragon, quite the caring friend! It is really gracious and roams the sky.");
}
else if (endScore === 1 || endScore === 2) {
  document.write("Crystal forestdancer dragon<br>");
  document.write("<img border='0' src='http://i1195.photobucket.com/albums/aa387/MyDragonCave/Adults/BlunaMale.gif' /><br>");
  document.write("Your dragon grew out to be a crystal forestdancer dragon! It is quite friendly and loves your presence.<br>");
}
else if (endScore === 3 || endScore === 4) {
  document.write("Sea dragon<br>");
  document.write("<img border='0' src='http://i1195.photobucket.com/albums/aa387/MyDragonCave/Adults/WaterFemale.gif' /><br>");
  document.write("Your dragon grew out to be a blue sea dragon! It is quite shy to show itself but takes you on it's back sometimes.<br>");
}
else if (endScore === 5 || endScore === 6) {
  document.write("Fiery dragon<br>");
  document.write("<img border='0' src='http://i1195.photobucket.com/albums/aa387/MyDragonCave/Adults/SwallowtailMale.png' /><br>");
  document.write("Your dragon grew out to be a colourfull fiery dragon! It occasionally hunts the forests animals.");
}
else if (endScore === 7 || endScore === 8) {
  document.write("Red fire dragon<br>");
  document.write("<img border='0' src='http://i1195.photobucket.com/albums/aa387/MyDragonCave/Adults/Magma.gif' /><br>");
  document.write("Your dragon grew out to be a red fire dragon! It is quite vicious and doesn't obey much. Better keep it away from the town.");
}
else if (endScore === 9) {
  document.write("Black dragon<br>");
  document.write("<img border='0' src='http://i1195.photobucket.com/albums/aa387/MyDragonCave/Adults/Thunder.gif' /><br>");
  document.write("Your dragon grew out to be a black dragon! It terrors the village and sets ablaze anything that isn't you.");
}
// End of the game

// ------------------------------
// Sluiten van de scope functie
} ());

// Bronnen:
// Converteren naar lowercase: (http://www.w3schools.com/js/js_obj_string.asp)
// Willekeurig nummer: (http://www.javascriptkit.com/javatutors/randomnum.shtml)
// Draken afbeeldingen van: (http://dragonbreederscave.com/index.php?PHPSESSID=519891bcea481fe713a84eedd687cc52&page=spoiler)
