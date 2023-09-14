const computerChoiceDisplay = document.getElementById("Computer-choice");
const userChoiceDisplay = document.getElementById("Users-choice");
const resultDisplay = document.getElementById("Result");
const possibleChoice = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
   userChoice = e.target.id;
   userChoiceDisplay.innerHTML = userChoice;
   generateComputerChoice();
   getResults();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoice.length + 1);
    if(randomNumber === 1) {
        computerChoice = "Rock";
    }
    if(randomNumber === 2) {
        computerChoice = "Paper";
    }
    if(randomNumber === 3) {
        computerChoice = "Scissor";
    }
    computerChoiceDisplay.innerHTML = computerChoice;
    console.log(randomNumber)
}

function getResults() {
    if(computerChoice === userChoice) {
        result = "It's a draw";
    }
    if(computerChoice === "Rock" && userChoice === "Paper") {
        result = "You win!";
    }
    if(computerChoice === "Paper" && userChoice === "Scissor") {
        result = "You win!";
    }
    if(computerChoice === "Paper" && userChoice === "Rock") {
        result = "You lost!";
    }
    if(computerChoice === "Scissor" && userChoice === "Rock") {
        result = "You win!";
    }
    if(computerChoice === "Scissor" && userChoice === "Paper") {
        result = "You lose!";
    }
    resultDisplay.innerHTML = result;
}