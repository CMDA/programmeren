/* Copyleft 2013, all wrongs reversed */
/* jslint browser: true */
/*globals console,prompt, document, addHandler, alert, confirm, window */
/*vars: true */

// bron: https://github.com/ju5tu5/cmdppro/blob/master/static/js/rockPaperScissors.js
// bron: https://github.com/ju5tu5/cmdppro/blob/master/static/js/chooseYourAdventure.js
// bron: Sonja, Lourens, Opdracht tijdens werkgroep Verander.js
window.onload = function () {
    "use strict";


    // dit is een leeg object verderop de in de code bij de functie toonGebruikerskeuze 
    // vul ik deze object door te zeggen keuzes.gebruikersKeuze
    var keuzes = {};

    // alle variablen gedeclareerd
    var gebruikersKeuze, userChoice, eindResultaat, computerKeuze, outcome, userAnswer, feedback, toonResultaat, toonComputerKeuze, userChoices;


    // gebruikerskeuze door middel van klik
    var toonGebruikerKeuze = function (event) {
        // sla keuze op in object keuzes
        keuzes.gebruikersKeuze = event.toElement.id;
        // laat zien wat de gebruiker heeft gekozen
        var kleurenDiv = document.getElementById("kleurengebruiker");
        kleurenDiv.innerHTML = '<img src="media/hart' + keuzes.gebruikersKeuze + '.png" id="' + keuzes.gebruikersKeuze + '" />';
        // voeg een knop toe ga verder en laat computerkeuze zien
        // addHandler code voor ga verder knop
        var knoppen = document.getElementById("buttons");
        knoppen.innerHTML +=  '<img src="media/button-ga-verder.png" id="gaverder" />';
        addHandler(document.getElementById("gaverder"), "click", toonComputerKeuze);
    };

    // keuze computer
    toonComputerKeuze = function (event) {

        // keuze computer in object keuze
        var keuzeRand = Math.random() * 2;
        if (keuzeRand <= 1) {
            computerKeuze = "geel";
        } else {
            computerKeuze = "blauw";
        }

        // laat zien wat de computer gekozen heeft
        var kleurenDiv = document.getElementById("kleurencomputer");
        kleurenDiv.innerHTML = '<img src="media/computer' + computerKeuze + '.png" id="' + computerKeuze + '" />';
        // voeg knop mengen toe na het laten zien van computer keuze
        var knoppen = document.getElementById("buttons");
        knoppen.innerHTML += '<img src="media/button-mengen.png" id="mengen" />';
        addHandler(document.getElementById("mengen"), "click", toonResultaat);
    };

    var toonBoodschap = function (tekst) {
        var berichtvenster = document.getElementById('berichtvenster');
        berichtvenster.innerHTML += "<p>" + tekst + "</p>\n";
    };


    // functie voor het veranderen van een achtergrond
    toonResultaat = function (event) {

        // kies welk element je wilt veranderen veranderen
        var achtergrond = document.getElementById('wrapper');

        // hier wordt uitgelegt wat er gebeurd wanneer keuzes gemaakt zijn door gebruiker en computer
        // welke kleur wordt de achtergrond met de keuzes gemaakt
        switch (keuzes.gebruikersKeuze) {
        case "rood":
            if (computerKeuze === "geel") {
                achtergrond.style.background = "brown";
                toonBoodschap("Je favoriete kleur is bruin");

            } else {
                achtergrond.style.background = "purple";
                toonBoodschap("Je favoriete kleur is paars");
            }
            break;

        case "geel":
            if (computerKeuze === "geel") {
                achtergrond.style.background = "yellow";
                toonBoodschap("Je favoriete kleur is geel");

            } else {
                achtergrond.style.background = "green";
                toonBoodschap("Je favoriete kleur is groen");
            }
            break;

        case "blauw":
            if (computerKeuze === "blauw") {
                achtergrond.style.background = "blue";
                toonBoodschap("Je favoriete kleur is blauw");

            } else {
                achtergrond.style.background = "green";
                toonBoodschap("Je favoriete kleur is groen");
            }
            break;
        }
    };

    // gebruiker kiest kleur
    var afbeelding1 = document.getElementById("rood");
    var afbeelding2 = document.getElementById("geel");
    var afbeelding3 = document.getElementById("blauw");


    // clickfunctie
    addHandler(afbeelding1, "click", toonGebruikerKeuze);
    addHandler(afbeelding2, "click", toonGebruikerKeuze);
    addHandler(afbeelding3, "click", toonGebruikerKeuze);


    userChoices = ["rood", "geel", "blauw"];
    userChoice = alert("Kies een kleur! rood, geel of blauw?");

};
