/* Copyleft 2015*/
/* L. Benvenuti*/
/* J. Faber*/
/* versie 10.1 */
/*globals console, confirm, prompt, document, window*/


/*constructor voor CMI-object. Object bevat de spelregels: hoe wordt het spel gespeeld en hoe wordt de toestand getoond.
players: het aantal pionnen waarmee wordt gespeeld
boardSize: aantal velden */
function CMI(players, boardSize) {
    this.pawns = []; //bevat de posities van de pionnen, bijv. [0,4,2]: pionnen resp. op positie 0, 4 en 2.
    this.board = [];    //bevat de opbouw van het bord: ['N','N','G','N','R']: 5 velden, 3 neutrale, 1 groene 1 rode
    this.rules = "Spelregels: Groen: stap vooruit; Rood: 2 stappen achteruit; Neutraal (beige): geen invloed";
    this.whoseTurn = 0;    //index in pawns-array van de pion die aan zet is. 0<=whoseTurn<pawns.length
    this.players = players;
    this.boardSize = boardSize;

}


CMI.prototype = {

    /* methode init() maakt een Array pawns aan en vult Array board met velden die opdrachten bevatten.
    Er zijn 2 velden met echte opdrachten en een veld met een (lege)neutrale opdracht*/
    init: function() {

        var worp;
        var fieldsArray = [];


        for (var i = 0; i < this.boardSize; i++) {
            worp = Math.random();

            if (worp < 0.65 ){
                fieldsArray[i] = 'N';
            }
            else if ((worp < 0.85 )&&(i != this.boardSize-1)){ //laatst veld is noooit Groen
                fieldsArray[i] = 'G';
            }
            else if ((worp >= 0.85)&&(i<=1)){
                fieldsArray[i] = 'N';
            }
            else { // (worp >= 0.85)&&(i>1), eerste/tweede zijn nooit Rood (ivm -2 stappen)
                fieldsArray[i] = 'R';
            }
        }

        this.board = fieldsArray;

        for (var i=0; i<this.players; i++){
            this.pawns[i] = 0;
        }

        this.whoseTurn=0;
    },

    /* methode getPawns() geeft het Array terug met de posities van de pionnen*/
    getPawns: function() {

        return this.pawns;
    },

    /* methode getBoard() geeft het Array terug met de configuratie van het bord terug */
    getBoard: function() {

        return this.board;
    },

    /* methode getRules() geeft een String terug met de regels*/
    getRules: function() {

        return this.rules;
    },

    /* methode getWhoseTurn() geeft de index terug van de pion die op dat moment aan zet is*/
    getWhoseTurn: function() {

        return this.whoseTurn;
    },

    /* methode move() wordt aangeroepen dor methode play(), en laat een pion een aantal stappen zetten.
     Als pion daarmee "uit" het bord loopt, loopt hij aan de andere kant weer het bord in.
     pion: bevat de index van de pion uit Array pawns dat moet worden verzet
     steps: geeft aan, hoeveel steps de pion moet zetten*/
    move: function (pawn,steps) {

        this.pawns[pawn]= (this.pawns[pawn]+steps) % this.board.length;
    },

    /* methode play() geeft een Array terug met de velden die pion whoseTurn aandoet.
     Deze methode verwerkt een worp met de dobbelsteen. De pion die op dat moment aan zet is, wordt eerst
     verzet, waarna een eventuele opdracht wordt verwerkt van het veld waar de pion op terecht is gekomen*/
    play: function(worp) {
        var field;
        var positie;
        var steps;
        var haltes = [];

        // de worp wordt verwerkt

        //hier wordt gekeken, of de pion met deze zet uit het bord loopt
        if (this.pawns[this.whoseTurn]+worp >14) {
                         haltes[0] = 'teleport';
            }

        //dan wordt de zet verwerkt
        this.move(this.whoseTurn, worp);
        haltes.push(this.pawns[this.whoseTurn]);


        // hier wordt gekeken of nog zetten moet worden gedaan:
        // Het laatste element van haltes bevat altijd de index van een veld.
        field = this.board[haltes[haltes.length-1]];

        // dan wordt bepaald, welke opdracht field bevat, dus hoeveel stappen de pion nog moet maken.
        // en worden eventuele aanvullende stappen gezet
        steps = add(field, this.pawns, this.board);

        if (steps != 0) {

            //er wordt gekeken, of de pion met deze zet uit het bord loopt
            if (this.pawns[this.whoseTurn]+steps >14) {
                             haltes.push('teleport');
                }

            //en wordt de zet verwerkt
            this.move(this.whoseTurn,steps);
            haltes.push(this.pawns[this.whoseTurn]);
        }


        // tot slot wordt bepaald, welke pion aan zet is
        this.whoseTurn = (this.whoseTurn+1) % this.pawns.length;

        return haltes;
    },

    /* methode show() toont de toestand van het bord in de console, en de positie van alle pionnen
       deze methode wordt alleen gebruikt voor testdoeleinden*/
    show: function() {
        var pawnString = "";
        var stringBoard = "";

        //voor iedere Pion wordt een pawnString opgebouwd
        for (var i = 0; i < this.pawns.length; i++) {

            //string Pion bevat een spatie voor ieder veld waar geen pion op staat
            for (var j = 0; j < this.pawns[i] ; j++) {
                pawnString = pawnString + " .  ";
            };

            //de laatste plaatsen van pawnString bevatten het symbool van de pion
            pawnString = pawnString + " "+ i;

            //pawnString wordt weergegeven en weer leeg gemaakt (voor de volgende Pion)
            console.log(pawnString);
            pawnString = "";
        }

        // stringBord geeft het bord weer
        for (var i = 0; i < this.board.length ; i++) {
            stringBoard = stringBoard + i + ":" + this.board[i] + " ";
        };
        console.log(stringBoard);

        console.log( "Aan zet pion" + this.whoseTurn + ": " + this.pawns[this.whoseTurn] );
    }

};
