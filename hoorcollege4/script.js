var print = function (text) {
    var debugWindow = document.getElementById('debug');
    var newElement = document.createElement('p');
    newElement.innerHTML = text;
    debugWindow.appendChild(newElement);
};

window.onload = function () {

    var titel = document.body.childNodes[1].childNodes[1];

    print(titel.innerHTML);

    titel.innerHTML = "Wat is dit nu?";

    //document.body.childNodes[1].childNodes[1].innerHTML = "test";
    //

    titel.style.color = "tomato";

    //var img = ...
    //img.src = "nieuweAfbeelding.png";

    var onzeDiv = document.getElementById("onzeDiv");

    onzeDiv.style.background = "goldenrod";

    var alinea = document.querySelector("p");
    alinea.style.background = "blue";


    var doeIets = function () {
        var nieuweAlinea = document.createElement('p');
        //nieuweAlinea.innerHTML = "En hier nog wat informatie.";

        var inhoud = document.createTextNode('En hier andere informatie');
        nieuweAlinea.appendChild(inhoud);
        onzeDiv.appendChild(nieuweAlinea);

        var alleAlineas = document.querySelectorAll('p');
        console.log(alleAlineas);

        for(var i=0; i<alleAlineas.length; i++) {
            alleAlineas[i].style.width = '3em';
        }

    };

    //window.setTimeout(doeIets, 2000);



};