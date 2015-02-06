// College 1
var naam = "Walter";

console.log(String);
console.log(Number);

console.log(typeof naam)

console.log("Is dit dan ook een object".length);

// College 2
function foo () {
    console.log("foo");
}

var bar = function () {
    console.log("bar");
};

var print = function (thing) {
    console.log(thing);
};

print("Een stukje tekst");
print(bar);

// College 3
var personen = ['Suzanne', 'Walter', 'Mees', 'Tasha', 'Gideon']
console.log(typeof personen);

var boeken = [
    {"titel":"Lord of the Rings 1 - The fellowship of the Ring"},
    {"titel":"Lord of the Rings 2 - The two towers"},
    {"titel":"Lord of the Rings 3 - Return of the King"},
    {"titel":"The Silmarilion"}
];
console.log(typeof boeken[1].titel);

// College 4
console.log(typeof document);

window.onload = function () {
    console.log(typeof document.getElementById('walter'));

    console.log(typeof document.querySelector('p'));


};

// College 5
var naam2 = "Justus";
// wat uitgevoerd wordt: var naam2 = new String("Justus");

Array.prototype.pop = function () {
    console.log('foo');
};

var rijtje = [1,2,3,4,5];
rijtje.pop();
console.log(rijtje);

// Vragen!!!1
//
// Als alles een object is, hoe wordt dan onthouden wat die objecten zijn.
// De parser bouwt een boomstructuur van de code en loopt een voor een alle stukjes code af

// Functies zijn niet enkel een methode om alles korter op te schrijven. Je voorkomt ook dat je jezelf herhaalt, dit maakt samenwerken beter mogelijk.

// Maakt het uit of je "" of '' gebruikt? => NEE
// In PHP
//$naam = "Justus";
//print("Woot: $naam"); // Woot: Justus
//print('Woot: $naam'); // Woot: $naam

console.log(Math.max(5, "10"));   // 10
console.log(Math.max(5, '10'));   // 10

var tekst = "Hallo wereld, cafe's ";
var tekst = 'Hallo wereld, cafe\'s ';
var tekst = "\"Ich bin ein Berliner\" -- Kennedy";

// Modulair programmeren
//

var _j = {};

_j.naam = "Justus";

_j.parse = function () {
    console.log('woot');
};









