/* Copyleft 2013, all wrongs reversed */
/*jslint browser: true, vars: true*/
/*globals console,document,prompt,confirm,alert*/

/* bronnen:
	- Voor setTimeout: http://stackoverflow.com/questions/10312963/javascript-settimeout
	de rest heb ik zelf geschreven :) Het is alleen niet gelukt om de aas 1 of 11 punten waard te laten zijn helaas

	bronnen van plaatjes van kaarten:
	http://en.wikipedia.org/wiki/Playing_card
*/

window.onload = function () {
	'use strict';

// dit object bevat het puntenaantal
	var totaalKaarten = {};
	totaalKaarten.speler = 0;
	totaalKaarten.pc = 0;

// object met aantal overwinningen in totaal
	var punten = {};
	punten.speler = 0;
	punten.pc = 0;


// formulier
	var startForm = document.forms.start;
	var formSpelerNaam = startForm.naam;
	var formSpelerLft = startForm.lft;
	var send = document.getElementById("submitBtn");

// Object met Speler Informatie
	var speler = {};

// hieronder worden variabele aangemaakt voor elke button die er in het spel zit. De variabele worden gedeclareerd met getElementById wat verwijst naar een ID in de HTML
	var btnUitlegSpelen = document.getElementById("btnSpelen");
	var btnUitlegHelp = document.getElementById("btnUitleg");
	var btnNogEenKaart = document.getElementById("nogEenKaart");
	var btnGeenKaart = document.getElementById("geenKaart");
	var btnOpnieuw = document.getElementById("resultaat");

// variabele voor de while loop die later wordt gebruikt wordt hier gedeclareerd
	var kaartErbij = true;

// deze functies zorgen ervoor dat de tekst die tijdens het spel wordt aangemaakt ten tonele verschijnt op het scherm.
// de functie schrijft de ingegeven parameter (tekst) naar de html van het gekozen ID element. 
	var toonBericht = function (tekst) {
		document.getElementById("tekstVak").innerHTML = "<p>" + tekst + "<p>";
	};

	var toonBerichtFormNaam = function (tekst) {
		document.getElementById("formTxtVak").innerHTML = "<p>" + tekst + "<p>";
	};

	var toonBerichtFormLft = function (tekst) {
		document.getElementById("formTxtVakLft").innerHTML = "<p>" + tekst + "<p>";
	};

	var toonBerichtUitleg = function (tekst) {
		document.getElementById("txtUitleg").innerHTML = "<p>" + tekst + "<p>";
	};

// functie die de score naar het scherm schrijft
	var schrijfScore = function () {
		document.getElementById("score").innerHTML = "<span id='scoreTitle'>Score:</span>" + speler.naam + ": <span id='scoreNmbr'>" + punten.speler + "</span><br />Computer: <span id='scoreNmbr'>" + punten.pc + "</span>";
	};

// de functies hieronder veranderen de kaart op het scherm

	var changeCardSpeler = function (kaart) {
		var kaartNmr = Math.ceil(Math.random() * 4);
		var kaartSoort = "harten";
		switch (kaartNmr) {
		case 1:
			kaartSoort = "harten";
			break;
		case 2:
			kaartSoort = "ruiten";
			break;
		case 3:
			kaartSoort = "schoppen";
			break;
		case 4:
			kaartSoort = "klaver";
			break;
		default:
			console.log("harten");
		}

		document.getElementById("spelerKaart").innerHTML += "<img id='spelerKaartImg' src='img/" + kaart + kaartSoort + ".png' alt='kaart van speler' />";
	};

	var changeCardPc = function (kaart) {
		var kaartNmr = Math.ceil(Math.random() * 4);
		var kaartSoort = "harten";
		switch (kaartNmr) {
		case 1:
			kaartSoort = "harten";
			break;
		case 2:
			kaartSoort = "ruiten";
			break;
		case 3:
			kaartSoort = "schoppen";
			break;
		case 4:
			kaartSoort = "klaver";
			break;
		default:
			console.log("harten");
		}

		document.getElementById("pckaart").innerHTML += "<img id='spelerKaartImg' src='img/" + kaart + kaartSoort + ".png' alt='kaart van speler' />";
	};

// De functie(s) hieronder zorgen voor de transition tussen de div's
// de gekozen HTML elementen worden als parameter ingevoerd en daarvan wordt de style (css) aangepast. In dit geval de display en de opacity
// doordat er in de CSS een transition is meegegeven krijg je een leuke overgang.
	var changeOpacity = function (element1, element2) {
		var changeOpacity3 = function (element) {
			element.style.opacity = "1";
		};

		var changeOpacity2 = function (element1, element2) {
			element1.style.display = "none";
			element2.style.display = "block";
// setTimeout is een functie die uitgevoerd wordt na het opgegeven aantal miliseconde. In dit geval 0 omdat die meteen na de andere uitgevoerd moet worden,
// dat is zo gedaan zodat de transition de tijd krijgt om te starten in CSS. Als ik dit niet in een timer gooi, dan werkt de transition niet
			setTimeout(function () {
				changeOpacity3(element2);
			}, 0);
		};

		element1.style.opacity = "0";
		setTimeout(function () {
			changeOpacity2(element1, element2);
		}, 400);
	};

// deze functie is alleen wanneer je wilt dat de andere div blijft
	var changeOpacityWithoutRemovingBackground = function (element) {
		element.style.opacity = "1";
	};

	var changeOpacityForground = function (element) {
		var changeOpacityForgroundDisplay = function (element) {
			element.style.display = "none";
		};

		element.style.opacity = "0";
		setTimeout(function () {
			changeOpacityForgroundDisplay(element);
		}, 400);
	};

// de 2 functies hieronder trekken de daadwerkelijke kaart
	var kaartTrekkenSpeler = function () {
		if (totaalKaarten.speler < 21) {
			var kaart = Math.ceil(Math.random() * 10);
			while (kaart === 1) {
				kaart = Math.ceil(Math.random() * 11);
			}
			totaalKaarten.speler += kaart;
			changeCardSpeler(kaart);

			if (totaalKaarten.speler >= 22) {
				document.getElementById("spelerTitle").innerHTML = speler.naam + ": " + totaalKaarten.speler + " punten.";
				document.getElementById("resultaat").innerHTML = "U heeft meer dan 21 punten<br /> U heeft verloren.<div id='btnOpnieuw'>Speel Opnieuw!</div>";
				document.getElementById("resultaatwrap").style.display = "block";
				setTimeout(function () {
					changeOpacityWithoutRemovingBackground(document.getElementById("resultaatwrap"));
				}, 0);
				btnOpnieuw = document.getElementById("btnOpnieuw");
				punten.pc += 1;
				schrijfScore();
			} else if (totaalKaarten.speler === 21) {
				document.getElementById("spelerTitle").innerHTML = speler.naam + ": " + totaalKaarten.speler + " punten.";
				document.getElementById("resultaat").innerHTML = "BLACKJACK!!!!<br /> U heeft gewonnen!<div id='btnOpnieuw'>Speel Opnieuw!</div>";
				document.getElementById("resultaatwrap").style.display = "block";
				setTimeout(function () {
					changeOpacityWithoutRemovingBackground(document.getElementById("resultaatwrap"));
				}, 0);
				btnOpnieuw = document.getElementById("btnOpnieuw");
				punten.speler += 1;
				schrijfScore();
			} else {
				document.getElementById("spelerTitle").innerHTML = speler.naam + ": " + totaalKaarten.speler + " punten.";
			}
		} else {
			document.getElementById("resultaat").innerHTML = "U heeft meer dan 21 punten<br /> U heeft verloren.<div id='btnOpnieuw'>Speel Opnieuw!</div>";
			document.getElementById("resultaatwrap").style.display = "block";
			setTimeout(function () {
				changeOpacityWithoutRemovingBackground(document.getElementById("resultaatwrap"));
			}, 0);
			btnOpnieuw = document.getElementById("btnOpnieuw");
			punten.pc += 1;
			schrijfScore();
		}
	};

	var kaartTrekkenPc = function () {
		document.getElementById("pckaart").innerHTML = "";
		while (kaartErbij === true) {
			if (totaalKaarten.pc < 17) {
// Hieronder wordt de variabele kaart gedeclareerd met een willekeurig getal 1 tot  11 aangemaakt en afgerond naar boven. Als 1 wordt getrokken dan wordt dat 11. 
// Hier heb ik heel lang lopen kloten met de mogelijkheid om aas 1 of 11 te laten worde, wat helaas niet lukken.  
				var kaart = Math.ceil(Math.random() * 10);
				while (kaart === 1) {
					kaart = Math.ceil(Math.random() * 11);
				}
				totaalKaarten.pc += kaart;
				changeCardPc(kaart);
			} else {
				kaartErbij = false;
			}
		}
		document.getElementById("computerTitle").innerHTML = "Computer: " + totaalKaarten.pc + " punten.";

		if (totaalKaarten.pc >= 22) {
			document.getElementById("resultaat").innerHTML = "De computer heeft meer dan 21 punten! <br /> U heeft gewonnen!<div id='btnOpnieuw'>Speel Opnieuw!</div>";
			document.getElementById("resultaatwrap").style.display = "block";
			setTimeout(function () {
				changeOpacityWithoutRemovingBackground(document.getElementById("resultaatwrap"));
			}, 0);
			btnOpnieuw = document.getElementById("btnOpnieuw");
			punten.speler += 1;
			schrijfScore();
		} else if (totaalKaarten.pc > totaalKaarten.speler) {
			document.getElementById("resultaat").innerHTML = "De computer heeft met " + totaalKaarten.pc + " punten meer punten dan u.<br /> U heeft verloren.<div id='btnOpnieuw'>Speel Opnieuw!</div>";
			document.getElementById("resultaatwrap").style.display = "block";
			setTimeout(function () {
				changeOpacityWithoutRemovingBackground(document.getElementById("resultaatwrap"));
			}, 0);
			btnOpnieuw = document.getElementById("btnOpnieuw");
			punten.pc += 1;
			schrijfScore();
		} else if (totaalKaarten.pc === totaalKaarten.speler) {
			document.getElementById("resultaat").innerHTML = "De computer heeft met " + totaalKaarten.pc + " net zoveel kaarten als u <br /> Gelijkspel.<div id='btnOpnieuw'>Speel Opnieuw!</div>";
			document.getElementById("resultaatwrap").style.display = "block";
			setTimeout(function () {
				changeOpacityWithoutRemovingBackground(document.getElementById("resultaatwrap"));
			}, 0);
			btnOpnieuw = document.getElementById("btnOpnieuw");
			schrijfScore();
		} else {
			document.getElementById("resultaat").innerHTML = "U heeft met " + totaalKaarten.speler + " punten gewonnen van de computer.<br /> De computer had er slechts " + totaalKaarten.pc + ".<div id='btnOpnieuw'>Speel Opnieuw!</div>";
			document.getElementById("resultaatwrap").style.display = "block";
			setTimeout(function () {
				changeOpacityWithoutRemovingBackground(document.getElementById("resultaatwrap"));
			}, 0);
			btnOpnieuw = document.getElementById("btnOpnieuw");
			punten.speler += 1;
			schrijfScore();
		}
	};



// hieronder begint het spel wanneer het formulier is ingevuld
	var startSpel = function () {

		speler.naam = formSpelerNaam.value;
		speler.lft = formSpelerLft.value;

// hieronder bevind zich een if/else statement die checked of het formulier correct is ingevuld, met de opties:
// - Naam en Leeftijd fout
// - Naam Fout, Leeftijd goed
// - Naam goed, maar te jong
// - beide goed :)
		if (speler.naam === "" && speler.lft < 18) {
			toonBerichtFormNaam("Vul een naam in");
			toonBerichtFormLft("U moet boven de 18 jaar zijn");
		} else if (speler.naam === "" && speler.lft > 18) {
			toonBerichtFormNaam("Vul een naam in");
			document.getElementById("formTxtVakLft").style.display = "none";
		} else if (speler.lft < 18) {
			toonBerichtFormLft("U moet boven de 18 jaar zijn");
			document.getElementById("formTxtVak").style.display = "none";
		} else {
			changeOpacity(document.getElementById("start"), document.getElementById("uitleg"));
			toonBerichtUitleg("<p class='title'>" + "Welkom " + speler.naam + ".</p><br /> We gaan BlackJack spelen!<br /> Wil je meer uitleg over het spel of wil je meteen beginnen?</p>");
		}
	};


	var sluitUitleg = function () {
		changeOpacity(document.getElementById("uitleg"), document.getElementById("spel"));
		document.getElementById("spelerTitle").innerHTML = speler.naam + ": " + totaalKaarten.speler + " punten.";
		document.getElementById("computerTitle").innerHTML = "Computer: " + totaalKaarten.pc + " punten.";
		schrijfScore();
		kaartTrekkenSpeler();
		kaartTrekkenSpeler();
	};

// reset het spel
	var opnieuw = function () {
		var opnieuwReset = function () {
			document.getElementById("spelerKaart").innerHTML = "";
			document.getElementById("pckaart").innerHTML = "<img id='spelerKaartImg' src='img/back.png' alt='achterkant van kaart' /><img id='spelerKaartImg' src='img/back.png' alt='achterkant van kaart' />";
			totaalKaarten.speler = 0;
			totaalKaarten.pc = 0;
			document.getElementById("computerTitle").innerHTML = "computer: " + totaalKaarten.pc + " punten.";
			kaartErbij = true;
			kaartTrekkenSpeler();
			kaartTrekkenSpeler();
			document.getElementById("spel").style.opacity = "1";

		};

		document.getElementById("spel").style.opacity = "0";
		setTimeout(function () {
			opnieuwReset(document.getElementById("resultaatwrap"));
		}, 400);

		setTimeout(function () {
			changeOpacityForground(document.getElementById("resultaatwrap"));
		}, 0);
	};


// hieronder zijn alle events aangeroepen, de laatste regel zorgt ervoor dat de focus in het formulier op het tekstvak van "Naam" ligt
	addHandler(btnNogEenKaart, "click", kaartTrekkenSpeler);
    addHandler(btnGeenKaart, "click", kaartTrekkenPc);
    addHandler(send, "click", startSpel);
    addHandler(btnUitlegSpelen, "click", sluitUitleg);
    addHandler(btnOpnieuw, "click", opnieuw);

    formSpelerNaam.focus();

};
// Sluiten van de scope functie
