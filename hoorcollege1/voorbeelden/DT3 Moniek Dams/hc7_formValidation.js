/* Copyleft 2013, all wrongs reversed */
/* Bron: <https://github.com/ju5tu5/cmdppro/blob/master/static/js/hc7_formValidation.js
https://github.com/ju5tu5/cmdppro/blob/master/hc7_formValidatie.html> */
/*jslint browser: true, vars: true*/
/*globals console,confirm,prompt,alert,document,window*/

//object,
window.onload = function () {
    'use strict';

    var namen = {
        naam1: "",
        naam2: "",
        naam3: ""
    };

    // hier word het formulier geselecteerd
    var formulier = document.forms.eenFormulier;
    // hier wordt de focus gezet op het eerste invoerveld
    formulier.elements.naam.focus();

    // functie toonFoutmelding
    var toonFoutmelding = function (melding) {

        document.getElementById('foutmelding').innerHTML = melding;

    };
    // functie toonresultaten van mathrandom
    var toonResultaat = function (meldingen) {
        document.getElementById('resultaat').innerHTML = meldingen + " moet koffie halen.";
    };

    // functie hightLightInvoerveld. Als een veld niet wordt ingevoerd dan wordt het veld gehighlight en komt er een waarschuwing
    //zo weet de persoon die het invuld dat hij nog niet klaar is
    var highLightInvoerveld = function (invoerveld) {
            invoerveld.className = "highlight";
            invoerveld.focus();
        };


    // functie valideerFormulier. Ieder naamveld heeft een andere var. daardoor kan je ze appart oproepen. 
    // Hier worden de namen ingevoerd.
    var valideerFormulier = function (event) {
        event.preventDefault();
        console.log('valideer');
        var naamveld = document.forms.eenFormulier.elements.naam;
        var naamveldeen = document.forms.eenFormulier.elements.naamtwee;
        var naamveldtwee = document.forms.eenFormulier.elements.naamdrie;


        // Er zal een foutmelding komen in het eerst opengelaten invulveld aangezien het logisch is dat mensen
        //beginnen met invullen in het eerste vel en dan het 2e en dan het 3e. Als dus vel 1,2 en 3 leeg zijn komt er een 
        //waarschuwing in veld 1, is dan 1  ingevuld en 2 en 3 niet dan komt de waarschuwing in 2 te staan. enz. tot dat het 
        //gehele formulier is ingevuld en er kan worden bepaald wie er koffie haalt
        if (naamveld.value === "") {
            toonFoutmelding("Voer een naam in alsjeblieft");
            highLightInvoerveld(naamveld);
            return;
        } else {

            // de eerste ingevoerde naam wordt opgeslagen in het object namen.naam1
            namen.naam1 = naamveld.value;
        }

        if (naamveldeen.value === "") {
            toonFoutmelding("Voer een naam in alsjeblieft");
            highLightInvoerveld(naamveldeen);
            return;
        } else {

                    // de tweede ingevoerde naam wordt opgeslagen in het object namen.naam2
            namen.naam2 = naamveldeen.value;
        }

        if (naamveldtwee.value === "") {
            toonFoutmelding("Voer een naam in alsjeblieft");
            highLightInvoerveld(naamveldtwee);
            return;
        } else {

                    // de derde ingevoerde naam wordt opgeslagen in het object namen.naam3
            namen.naam3 = naamveldtwee.value;
        }
        // todo nog checken of andere naamvelden niet leeg zijn. toonresultaat overal

        //Hier wordt er bepaalt wie er koffie gaat halen. Dit gebeurt met math.random. Op die manier wordt door de computer
        //bepaalt wie er koffie gaat halen.
        //bij de eerste if word het object namen.naam1 getoond, dat is wat is ingevoerd in naamveld 
        //bij de else if word het object namen.naam2 getoond, dat is wat is ingevoerd in naamveldeen
        //bij de else word het object namen.naam3 getoond, dat is wat is ingevoerd in naamveldtwee
        var computerChoice = Math.random();
        if (computerChoice < 0.34) {
            toonResultaat(namen.naam1);
        } else if (computerChoice > 0.67) {
            toonResultaat(namen.naam2);
        } else {
            toonResultaat(namen.naam3);

        }

    };

    // wanneer de gebruiker op 'Verzenden' klikt wordt het formulier gevalideerd en wordt er weergegeven wie er koffie moet halen.
    addHandler(formulier, "submit", valideerFormulier);
};