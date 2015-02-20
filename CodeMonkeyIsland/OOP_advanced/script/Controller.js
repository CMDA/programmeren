/* Copyleft 2015*/
/* L. Benvenuti*/
/* D. de Vries*/
/* J. Faber*/
/* versie 10.1 */
/*globals console, confirm, prompt, document, window*/

window.onload = function () {
    'use strict';

    var PLAYERS = 3,
        BOARDSIZE = 15;

    var game, dice, diceImg, fieldWith, stops;
    var playersView = []; //bevat de elementen van de DOM-tree die de aapjes representeren
    var playersModel;     // bevat de posities van de aapjes, bijv. [0,2,4]
    var audio = new Audio('sfx/shake_dice.mp3');

    /* hulpfunctie moves() verzorgt de animaties van pion met index player, dat wordt gerepresenteerd door aapje
       playerImg, terwijl hij een tussenhalte maakt op het veld met index moves
       moves: de tussenhalte van de pion
       player: index van de pion in Array playersModel
       playerImg: Dom-element dat het aapje representeert*/
    function move(moves, player, playerImg){
        //moves = stops[i], het veld waar de pion een tussenstop maakt


        if(moves == 'teleport'){ //teleport
            playerImg.classList.remove('teleport');
            setTimeout(function (){ // hack to retrigger
                playerImg.classList.add('teleport');
            }, 500);
            setTimeout(function (){ // delay
                playerImg.style.left = -60 + "px";
            }, 750);
        }
        else{
            playerImg.style.left = moves * 68 + "px";
            //playerImg.classList.remove('jump');
            //setTimeout(function (){ // hack to retrigger
            //      playerImg.classList.add('jump');
            //}, 1500);
        }

    }

    /* hulpfunctie rolls() verzorgt de animatie van de Dobbelsteen */
    function rolls(){
        diceImg.src = './img/'+dice.getImg();

        /* unset and set classes to trigger animation */
        diceImg.classList.remove('rotatein');
        diceImg.parentElement.classList.remove('slidein');

        setTimeout(function (){ // hack to retrigger
            diceImg.classList.add('rotatein');
            diceImg.parentElement.classList.add('slidein');
        }, 1);

        audio.pause();
        audio.currentTime = 0;
        audio.play();

    }

    /* functie rollDice() is de eventhandler van de dobbelsteen.
       De functie simuleert de worp met de Dobbelsteen en geeft het resultaat weer, bepaalt de route van de pion die
       aan zet is, roept functie moves() aan en toont de ontstane toestand */
    function rollDice () {
        var player = game.getWhoseTurn(); //de speler die aan zet is als deze functie wordt aangeroepen
        var playerImg = playersView[game.getWhoseTurn()];
        //var posx = parseInt(playerImg.style.left.substr(0,playerImg.style.left.length-2));
        var timeout = -1000;

        dice.roll();
        rolls();

        stops = game.play(dice.getValue());  //na deze aanroep is de volgende player aan zet
        console.log(stops);

        //move pion
        for (var i=0; i < stops.length; i++) {
            setTimeout(move, timeout+=1000, stops[i], player, playerImg);
        }

        game.show();

    }

    /* functie initBoard() bouwt de weergave van het bord op */
    function initBoard () {
        var boardModel = game.getBoard();
        //boardModel is een array symbolen ['N','N','G','N','R']: 5 velden, 3 neutrale, 1 groene en 1 rode
        var boardView = document.getElementById("gameBoard");
        var rules = document.getElementById("rules");
        var field;

        for (var i = 0; i < boardModel.length; i++) {
            field = document.createElement('li');


            if (boardModel[i] == 'N'){
                field.className='neutraal';
            }

            else if (boardModel[i] == 'G') {
                field.className='groen';
            }

            else {
                field.className='rood';
            }

            fieldWith = Math.floor((window.innerWidth-30) / boardModel.length);

            field.width = fieldWith;

            //field.width = 82;
            boardView.appendChild(field);

        }

        rules.value = game.getRules();

    }

    game = new CMI(PLAYERS,BOARDSIZE);

    // Hier wordt een spel aangemaaakt met 3 pionnen en 15 velden. De velden worden random gevuld door game.init()
    game.init();
    playersModel = game.getPawns();

    //de interface wordt opgebouwd: eerst het Bord, dan wordt de Array gevuld met img-elementen (de aapjes)
    initBoard();

    playersView[0] = document.getElementById('player1');
    playersView[1] = document.getElementById('player2');
    playersView[2] = document.getElementById('player3');


    // Een Dobbelsteen-object wordt aangemaakt en de bijbehorende img wordt getoond
    dice = new Dice();
    dice.setImg();

    diceImg = window.document.getElementById("dice");
    diceImg.src = './img/'+dice.getImg();

    // de dobbelsteen wordt gekoppeld aan eventhandler rollDice()
    diceImg.onclick = rollDice;

    // weergave in de console voor testdoeleinden
    game.show();

};
