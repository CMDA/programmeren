var print = function (tekst) {
    console.log("Boodschap: " + tekst);
}

var getal = 15; // pre-conditie

while (getal > 0) { // post-conditie
    print("We zijn bij " + getal);
    getal--; // handeling
}

    // pre; post; handeling
for (var i=0; i<20; i++) {
    print("We hebben een " + i);
}