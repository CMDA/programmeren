// Dit is de versie voor refactoring, excuus voor eventuele slordigheden

// DRY: Don't repeat yourself
// Twee hulp-functies om het selecteren van HTML elementen te vereenvoudigen
var $ = function (element) {
    return document.querySelector(element);
};

var $$ = function (element) {
    return document.querySelectorAll(element);
};

// Maak een custom event aan voor het toevoegen van een item aan de todolijst
var refresh = new Event('refresh');

// Een event functie die aan het toevoegen van een item aan de todolijst gekoppeld wordt
var refreshList = function (event) {
    // Vul de todoList met de array uit localstorage gebruikt een || trucje om te
    // zorgen dat er geen foutmelding ontstaat als er geen localStorage item bestaat
    var ul = $('ul'),
        todoList = JSON.parse(localStorage.getItem('todoList')) || [];

    // Leeg de inhoud van de ul
    while(ul.firstChild) { // zolang er een firstChild is
        ul.removeChild(ul.firstChild); // verwijder die
    }

    // Loop door de todoList
    for (var i=0; i< todoList.length; i++) {
        // Maak nieuwe html nodes aan voor de inhoud van de ul
        var li = document.createElement('li');
        var title = document.createTextNode(todoList[i].title);
        var span = document.createElement('span');
        var date = document.createTextNode(todoList[i].date);

        // Voeg de nodes in de juiste volgorde toe aan de parent node
        ul.appendChild(li);
        li.appendChild(title);
        li.appendChild(span);
        span.appendChild(date);
    }
};

// Een event functie die aan het submitten van het formulier gekoppeld wordt
var createTodo = function (event) {
    // Zorg er voor dat het default event (pagina herladen) niet uitgevoerd wordt
    event.preventDefault();

    // Vul de todoList met de array uit localstorage, zelfde als op regel 18
    var todoList = JSON.parse(localStorage.getItem('todoList')) || [];

    // Haal de waarden uit het formulier en push deze achteraan de todoList array
    // ik probeer altijd zo weinig mogelijk variabelen te gebruiken omdat deze onnodig
    // geheugen innemen, hoe meer ik met object en array literals kan doen hoe beter
    todoList.push({
        "date": $('#date').value,
        "title": $('#title').value
    });

    // Serialize de todoList array naar een string
    localStorage.setItem('todoList', JSON.stringify(todoList));

    // Trigger het refresh event
    dispatchEvent(refresh);
};

// Zwengel het programma aan in het onload event (sorry Joost ^^)
window.onload = function () {
    // Roep het formulier aan en koppel de functie createTodo aan het submit event
    $('form').addEventListener('submit', createTodo);
    // Koppel de functie refreshList aan het refresh event (wat we op regel 11 zelf aanmaken)
    addEventListener('refresh', refreshList);
    // Trigger de 1e keer het refresh event om de lijst te vullen
    dispatchEvent(refresh);
};
