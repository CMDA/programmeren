var print = function (tekst) {
    console.log(tekst);
};

//Check if the user is ready to play!
confirm('Are you ready to play?');

var age = prompt("What's your age?");

if(age < 18){
    print("You are allowed to play but we won't take responsibility.");
}else{
    print("Play on! Play it!");
}

print("Snow White and Batman were hanging out at the bus stop, waiting to go to the shops. There was a sale on and both needed some new threads. You've never really liked Batman. You walk up to him.");
print("Batman glares at you.");

var userAnswer = prompt("Are you feeling lucky, punk?");

if(userAnswer === 'yes'){
    print("Batman hits you very hard. It's BAtman and you're you! Of course Batman wins!");
}else{
    print("You did not say yes to feeling lucky. Good choice! You are a winner in the game of not getting beaten up by Batman.");
}

var feedback = prompt("Please rate my game? []1-10]");

if(feedback>8){
    print("This is just the beginning of my game empire. Stay tuned for more!");
}else{
    print("I slaved away at this game and you gave me that score?! The nerve! Just you wait!");
}