/* Copyleft 2015*/
/* L. Benvenuti*/
/* versie 10.1 */
/*globals console, confirm, prompt, document, window*/

/* add()-functie
  Pas deze functie aan:
   - Opdr 1. zorg er voor, dat de pion altijd een extra stap zet.
   - Opdr 2. zorg er voor, dat de pion alleen een extra stap zet als hij op een (groen)veld staat, met symbool 'G'
   - Opdr3. breid de functie zo uit, dat de pion een stap terug doet als hij op een (rood)veld staat, met symbool 'R'.
   - Opdr. 4 breid de functie zo uit, dat hij het aantal rode velden afdrukt in de console.
   - Opdr. 5 Breid de functie zo uit, dat hij in de console afdrukt hoeveel pionnen er op een rood veld staan.
   - Opdr. 6 Definieer twee hulpfuncties rood() en groen(), die worden aangeroepen als de pion op een rood resd. groen veld komt.
   - Opdr 7. Breid de code zo uit, dat dit het effect is van "neutrale"  velden:
     een aapje zet zoveel stappen voruit als er aapjes op groene velden staan en zoveel achteruit als er aapjes op rode velden staan.
   - Alternatief voor de CodePoets (ipv huiswerk na week 3): wijzig de code van functie speel() zo, dat de pion alle opdrachten verwerkt van de velden die hij aandoet.
     Hij eindigt dus altijd op een "neutraal" veld (symbool 'N', kleur beige)
   -Voor iedereen die er zin in heeft: bedenk een opdracht, werk hem uit en stuur hem naar: l.benvenuti@hva.nl.
   Als ik hem gebruik, vermeld ik je naam er bij
*/

/*functie add() geeft een Number terug: het aantal stappen dat de pion moet doen als hij op een veld komt van de opgegeven soort
  token:    het symbool dat deze soort identificeert: 'N', 'G', 'R'
  monkeys:  een Array met de posities va de aapjes: [8,0,2] betekent: chimp op positie 8, gorilla op positie 0 en
            orangutan op positie 2
  tiles:    een Array met de samenstelling van het bord, een symbool per veld ('N','G' of 'R')*/
add = function(token,monkeys,tiles) {

        var symbol = token;   //symbool = 'N','G' of 'R'
        var outcome = 0 ;   //resultaat bevat het aantal stappen dat een pion moet zetten als hij op dit veld komt

        if (symbol == 'N') {
            outcome = 0;
        }
        else if (symbol == 'R') {
            outcome = -2;
        }
        else {   // symbol == 'G'
            outcome = 1;
        }

        return outcome;
};


