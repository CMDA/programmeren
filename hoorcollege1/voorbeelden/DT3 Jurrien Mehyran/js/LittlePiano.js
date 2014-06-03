/*jslint browser: true, vars: true*/
/*globals console,confirm,prompt,alert,document,window,addHandler*/

//addHandler = function (node, type, handler)


window.onload = function () {
	'use strict';
	console.log("LittlePiano.js has loaded");

	//Document ID's voor de toetsen als object voor het click event.
	var aMKey = window.document.getElementById("aMKey");
	var bKey = window.document.getElementById("bKey");
	var cKey = window.document.getElementById("cKey");
	var cMKey = window.document.getElementById("cMKey");
	var dKey = window.document.getElementById("dKey");
	var dMKey = window.document.getElementById("dMKey");
	var eKey = window.document.getElementById("eKey");
	var fKey = window.document.getElementById("fKey");
	var fMKey = window.document.getElementById("fMKey");
	var gKey = window.document.getElementById("gKey");
	var gMKey = window.document.getElementById("gMKey");
	var aKey = window.document.getElementById("aKey");
	var a2MKey = window.document.getElementById("a2MKey");
	var b2Key = window.document.getElementById("b2Key");
	var c2Key = window.document.getElementById("c2Key");
	var c2MKey = window.document.getElementById("c2MKey");

	//Alle paths zetten voor de geluidsbestanden
	var keyPath = {
		aMKey: "./sound/normal/normal_aMKey.wav",
		bKey: "./sound/normal/normal_bKey.wav",
		cKey: "./sound/normal/normal_cKey.wav",
		cMKey: "./sound/normal/normal_cMKey.wav",
		dKey: "./sound/normal/normal_dKey.wav",
		dMKey: "./sound/normal/normal_dMKey.wav",
		eKey: "./sound/normal/normal_eKey.wav",
		fKey: "./sound/normal/normal_fKey.wav",
		fMKey: "./sound/normal/normal_fMKey.wav",
		gKey: "./sound/normal/normal_gKey.wav",
		gMKey: "./sound/normal/normal_gMKey.wav",
		aKey: "./sound/normal/normal_aKey.wav",
		a2MKey: "./sound/normal/normal_a2MKey.wav",
		b2Key: "./sound/normal/normal_b2Key.wav",
		c2Key: "./sound/normal/normal_c2Key.wav",
		c2MKey: "./sound/normal/normal_c2MKey.wav"
	};
	//Deze functies zorgen er voor dat het keyPath-object word aagepast zodat andere geluiden worden gespeeld.
	var modeNormal = function () {
		keyPath.aMKey = "./sound/normal/normal_aMKey.wav";
		keyPath.bKey = "./sound/normal/normal_bKey.wav";
		keyPath.cKey = "./sound/normal/normal_cKey.wav";
		keyPath.cMKey = "./sound/normal/normal_cMKey.wav";
		keyPath.dKey = "./sound/normal/normal_dKey.wav";
		keyPath.dMKey = "./sound/normal/normal_dMKey.wav";
		keyPath.eKey = "./sound/normal/normal_eKey.wav";
		keyPath.fKey = "./sound/normal/normal_fKey.wav";
		keyPath.fMKey = "./sound/normal/normal_fMKey.wav";
		keyPath.gKey = "./sound/normal/normal_gKey.wav";
		keyPath.gMKey = "./sound/normal/normal_gMKey.wav";
		keyPath.aKey = "./sound/normal/normal_aKey.wav";
		keyPath.a2MKey = "./sound/normal/normal_a2MKey.wav";
		keyPath.b2Key = "./sound/normal/normal_b2Key.wav";
		keyPath.c2Key = "./sound/normal/normal_c2Key.wav";
		keyPath.c2MKey = "./sound/normal/normal_c2MKey.wav";
	};
	var modeSoft = function () {
		keyPath.aMKey = "./sound/soft/soft_aMKey.wav";
		keyPath.bKey = "./sound/soft/soft_bKey.wav";
		keyPath.cKey = "./sound/soft/soft_cKey.wav";
		keyPath.cMKey = "./sound/soft/soft_cMKey.wav";
		keyPath.dKey = "./sound/soft/soft_dKey.wav";
		keyPath.dMKey = "./sound/soft/soft_dMKey.wav";
		keyPath.eKey = "./sound/soft/soft_eKey.wav";
		keyPath.fKey = "./sound/soft/soft_fKey.wav";
		keyPath.fMKey = "./sound/soft/soft_fMKey.wav";
		keyPath.gKey = "./sound/soft/soft_gKey.wav";
		keyPath.gMKey = "./sound/soft/soft_gMKey.wav";
		keyPath.aKey = "./sound/soft/soft_aKey.wav";
		keyPath.a2MKey = "./sound/soft/soft_a2MKey.wav";
		keyPath.b2Key = "./sound/soft/soft_b2Key.wav";
		keyPath.c2Key = "./sound/soft/soft_c2Key.wav";
		keyPath.c2MKey = "./sound/soft/soft_c2MKey.wav";
	};
	var modeTechno = function () {
		keyPath.aMKey = "./sound/techno/techno_aMKey.wav";
		keyPath.bKey = "./sound/techno/techno_bKey.wav";
		keyPath.cKey = "./sound/techno/techno_cKey.wav";
		keyPath.cMKey = "./sound/techno/techno_cMKey.wav";
		keyPath.dKey = "./sound/techno/techno_dKey.wav";
		keyPath.dMKey = "./sound/techno/techno_dMKey.wav";
		keyPath.eKey = "./sound/techno/techno_eKey.wav";
		keyPath.fKey = "./sound/techno/techno_fKey.wav";
		keyPath.fMKey = "./sound/techno/techno_fMKey.wav";
		keyPath.gKey = "./sound/techno/techno_gKey.wav";
		keyPath.gMKey = "./sound/techno/techno_gMKey.wav";
		keyPath.aKey = "./sound/techno/techno_aKey.wav";
		keyPath.a2MKey = "./sound/techno/techno_a2MKey.wav";
		keyPath.b2Key = "./sound/techno/techno_b2Key.wav";
		keyPath.c2Key = "./sound/techno/techno_c2Key.wav";
		keyPath.c2MKey = "./sound/techno/techno_c2MKey.wav";
	};
	//Deze variabelen declareren de document ID's van de keuzeknoppen
	var standardButton = window.document.getElementById("standard");
	var tinytonesButton = window.document.getElementById("tinytones");
	var technoButton = window.document.getElementById("techno");

	//Deze functie reset de achtergrondplaatjes voor de keuzeknoppen div's
	var resetButtonBackgrounds = function () {
		standardButton.style.backgroundImage = "url('./image/b_standard.png')";
		tinytonesButton.style.backgroundImage = "url('./image/b_tinytones.png')";
		technoButton.style.backgroundImage = "url('./image/b_techno.png')";
	};
	//Deze functies zorgen er voor dat wanneer de eventHandler signaleerd de toonmodus word geselecteerd
	var standardToneSelect = function (event) {
		modeNormal();
		resetButtonBackgrounds();
		standardButton.style.backgroundImage = "url('./image/b_standard_select.png')";
	};
	var tinytonesToneSelect = function (event) {
		modeSoft();
		resetButtonBackgrounds();
		tinytonesButton.style.backgroundImage = "url('./image/b_tinytones_select.png')";
	};
	var technoToneSelect = function (event) {
		modeTechno();
		resetButtonBackgrounds();
		technoButton.style.backgroundImage = "url('./image/b_techno_select.png')";
	};
	//En hier zijn die eventhandlers
	addHandler(standardButton, "click", standardToneSelect);
	addHandler(tinytonesButton, "click", tinytonesToneSelect);
	addHandler(technoButton, "click", technoToneSelect);

	//Deze functies laten de toetsen voor een kort moment blinken met een blauwe gloed.
	var aMKeyHighlight = function () {
		aMKey.style.backgroundColor = "#00008B";
		setTimeout(function () { aMKey.style.backgroundColor = "black"; }, 100);
	};
	var bKeyHighlight = function () {
		bKey.style.backgroundColor = "#F0F8FF";
		setTimeout(function () { bKey.style.backgroundColor = "white"; }, 100);
	};
	var cKeyHighlight = function () {
		cKey.style.backgroundColor = "#F0F8FF";
		setTimeout(function () { cKey.style.backgroundColor = "white"; }, 100);
	};
	var cMKeyHighlight = function () {
		cMKey.style.backgroundColor = "#00008B";
		setTimeout(function () { cMKey.style.backgroundColor = "black"; }, 100);
	};
	var dKeyHighlight = function () {
		dKey.style.backgroundColor = "#F0F8FF";
		setTimeout(function () { dKey.style.backgroundColor = "white"; }, 100);
	};
	var dMKeyHighlight = function () {
		dMKey.style.backgroundColor = "#00008B";
		setTimeout(function () { dMKey.style.backgroundColor = "black"; }, 100);
	};
	var eKeyHighlight = function () {
		eKey.style.backgroundColor = "#F0F8FF";
		setTimeout(function () { eKey.style.backgroundColor = "white"; }, 100);
	};
	var fKeyHighlight = function () {
		fKey.style.backgroundColor = "#F0F8FF";
		setTimeout(function () { fKey.style.backgroundColor = "white"; }, 100);
	};
	var fMKeyHighlight = function () {
		fMKey.style.backgroundColor = "#00008B";
		setTimeout(function () { fMKey.style.backgroundColor = "black"; }, 100);
	};
	var gKeyHighlight = function () {
		gKey.style.backgroundColor = "#F0F8FF";
		setTimeout(function () { gKey.style.backgroundColor = "white"; }, 100);
	};
	var gMKeyHighlight = function () {
		gMKey.style.backgroundColor = "#00008B";
		setTimeout(function () { gMKey.style.backgroundColor = "black"; }, 100);
	};
	var aKeyHighlight = function () {
		aKey.style.backgroundColor = "#F0F8FF";
		setTimeout(function () { aKey.style.backgroundColor = "white"; }, 100);
	};
	var a2MKeyHighlight = function () {
		a2MKey.style.backgroundColor = "#00008B";
		setTimeout(function () { a2MKey.style.backgroundColor = "black"; }, 100);
	};
	var b2KeyHighlight = function () {
		b2Key.style.backgroundColor = "#F0F8FF";
		setTimeout(function () { b2Key.style.backgroundColor = "white"; }, 100);
	};
	var c2KeyHighlight = function () {
		c2Key.style.backgroundColor = "#F0F8FF";
		setTimeout(function () { c2Key.style.backgroundColor = "white"; }, 100);
	};
	var c2MKeyHighlight = function () {
		c2MKey.style.backgroundColor = "#00008B";
		setTimeout(function () { c2MKey.style.backgroundColor = "black"; }, 100);
	};

	//Deze eventhandler-functies zorgen er voor dat de toonhoogte word gespeeld en dat de toets blinkt. Ook word er naar de console de toonhoogte geprint
	//Bron voor play sound: http://www.williambharding.com/blog/uncategorized/play-sound-wav-mp3-etc-with-one-line-of-javascript/
	var normal_aMKey = function (event) {
		document.getElementById("aMKey").innerHTML = " <embed src='" + keyPath.aMKey + "' hidden=true autostart=true loop=false>";
		aMKeyHighlight();
		console.log("a#");
	};
	var normal_bKey = function (event) {
		document.getElementById("bKey").innerHTML = " <embed src='" + keyPath.bKey + "' hidden=true autostart=true loop=false>";
		bKeyHighlight();
		console.log("b");
	};
	var normal_cKey = function (event) {
		document.getElementById("cKey").innerHTML = " <embed src='" + keyPath.cKey + "' hidden=true autostart=true loop=false>";
		cKeyHighlight();
		console.log("c");
	};
	var normal_cMKey = function (event) {
		document.getElementById("cMKey").innerHTML = " <embed src='" + keyPath.cMKey + "' hidden=true autostart=true loop=false>";
		cMKeyHighlight();
		console.log("c#");
	};
	var normal_dKey = function (event) {
		document.getElementById("dKey").innerHTML = " <embed src='" + keyPath.dKey + "' hidden=true autostart=true loop=false>";
		dKeyHighlight();
		console.log("d");
	};
	var normal_dMKey = function (event) {
		document.getElementById("dMKey").innerHTML = " <embed src='" + keyPath.dMKey + "' hidden=true autostart=true loop=false>";
		dMKeyHighlight();
		console.log("d#");
	};
	var normal_eKey = function (event) {
		document.getElementById("eKey").innerHTML = " <embed src='" + keyPath.eKey + "' hidden=true autostart=true loop=false>";
		eKeyHighlight();
		console.log("e");
	};
	var normal_fKey = function (event) {
		document.getElementById("fKey").innerHTML = " <embed src='" + keyPath.fKey + "' hidden=true autostart=true loop=false>";
		fKeyHighlight();
		console.log("f");
	};
	var normal_fMKey = function (event) {
		document.getElementById("fMKey").innerHTML = " <embed src='" + keyPath.fMKey + "' hidden=true autostart=true loop=false>";
		fMKeyHighlight();
		console.log("f#");
	};
	var normal_gKey = function (event) {
		document.getElementById("gKey").innerHTML = " <embed src='" + keyPath.gKey + "' hidden=true autostart=true loop=false>";
		gKeyHighlight();
		console.log("g");
	};
	var normal_gMKey = function (event) {
		document.getElementById("gMKey").innerHTML = " <embed src='" + keyPath.gMKey + "' hidden=true autostart=true loop=false>";
		gMKeyHighlight();
		console.log("g#");
	};
	var normal_aKey = function (event) {
		document.getElementById("aKey").innerHTML = " <embed src='" + keyPath.aKey + "' hidden=true autostart=true loop=false>";
		aKeyHighlight();
		console.log("a");
	};
	var normal_a2MKey = function (event) {
		document.getElementById("a2MKey").innerHTML = " <embed src='" + keyPath.a2MKey + "' hidden=true autostart=true loop=false>";
		a2MKeyHighlight();
		console.log("a2#");
	};
	var normal_b2Key = function (event) {
		document.getElementById("b2Key").innerHTML = " <embed src='" + keyPath.b2Key + "' hidden=true autostart=true loop=false>";
		b2KeyHighlight();
		console.log("b2");
	};
	var normal_c2Key = function (event) {
		document.getElementById("c2Key").innerHTML = " <embed src='" + keyPath.c2Key + "' hidden=true autostart=true loop=false>";
		c2KeyHighlight();
		console.log("c2");
	};
	var normal_c2MKey = function (event) {
		document.getElementById("c2MKey").innerHTML = " <embed src='" + keyPath.c2MKey + "' hidden=true autostart=true loop=false>";
		c2MKeyHighlight();
		console.log("c2#");
	};

	//Click events voor de toetsen
	addHandler(aMKey, "click", normal_aMKey);
	addHandler(bKey, "click", normal_bKey);
	addHandler(cKey, "click", normal_cKey);
	addHandler(cMKey, "click", normal_cMKey);
	addHandler(dKey, "click", normal_dKey);
	addHandler(dMKey, "click", normal_dMKey);
	addHandler(eKey, "click", normal_eKey);
	addHandler(fKey, "click", normal_fKey);
	addHandler(fMKey, "click", normal_fMKey);
	addHandler(gKey, "click", normal_gKey);
	addHandler(gMKey, "click", normal_gMKey);
	addHandler(aKey, "click", normal_aKey);
	addHandler(a2MKey, "click", normal_a2MKey);
	addHandler(b2Key, "click", normal_b2Key);
	addHandler(c2Key, "click", normal_c2Key);
	addHandler(c2MKey, "click", normal_c2MKey);

	//Toetsenbord functie voor de toetsenbord-handler
    var toetsenbord = function (event) {
        switch (event.keyCode) {
        case 81:
            normal_bKey();
            break;
        case 87:
            normal_cKey();
            break;
        case 69:
            normal_dKey();
            break;
        case 82:
            normal_eKey();
            break;
        case 84:
            normal_fKey();
            break;
        case 89:
            normal_gKey();
            break;
        case 85:
            normal_aKey();
            break;
        case 73:
            normal_b2Key();
            break;
        case 79:
            normal_c2Key();
            break;

        case 49:
            normal_aMKey();
            break;
        case 51:
            normal_cMKey();
            break;
        case 52:
            normal_dMKey();
            break;
        case 54:
            normal_fMKey();
            break;
        case 55:
            normal_gMKey();
            break;
        case 56:
            normal_a2MKey();
            break;
        case 48:
            normal_c2MKey();
            break;
        }
    };
    //De handler voor het gebruik van het toetsenbord
    addHandler(document.body, "keydown", toetsenbord);
};