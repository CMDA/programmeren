var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();

if (computerChoice < 0.34){
    computerChoice = "rock";
}else if(computerChoice <= 0.67){
    computerChoice = "paper";
}else{
    computerChoice = "scissors";
}

var compare = function (choice1, choice2) {
    var answer = (choice1 === choice2)?"The result is a tie!":null;

    // var answer;
    // if(choice1 === choice2) {
    //     answer = "The result is a tie!";
    // }

    switch(choice1){
        case "rock":
            // wait what?
            answer = (choice2 === "paper") ? "paper wins" : "rock wins";
            break;
        case "paper":
            answer = (choice2 === "scissors") ? "scissors wins" : "paper wins";
            break;
        case "scissors":
            answer = (choice2 === "rock") ? "rock wins" : "scissors wins";
            break;
    }

    return answer;
};

console.log( compare(userChoice, computerChoice) );
