

function getComputerChoice(){
    let items = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random()*3);
    let choice = items[random];
    return choice;
}



function playRound (playerSelection, computerSelection){
     playerSelection = playerChoice();
     computerSelection = getComputerChoice();
if (playerSelection === computerSelection) {
    return 'Its a tie'
}
else if (playerSelection === 'rock' && computerSelection ==='paper'){
    computerScore++;
    return 'Computer wins this round'
}
else if(playerSelection === 'paper' && computerSelection === 'scissors'){
    computerScore++;
    return 'Computer wins this round'
}
else if(playerSelection === 'scissors' && computerSelection === 'rock'){
    computerScore++;
    return 'Computer wins this round'
}
else {
   playerScore++;
   return 'Player wins this round'
}
}

function playerChoice() {
    let selection = prompt('Select your choice');
    return selection
}


let computerScore = 0;
let playerScore = 0;

function game(){
    
    console.log(playRound(playerChoice(), getComputerChoice()))
    console.log(playRound(playerChoice(), getComputerChoice()))
    console.log(playRound(playerChoice(), getComputerChoice()))
    console.log(playRound(playerChoice(), getComputerChoice()))
    console.log(playRound(playerChoice(), getComputerChoice()))
    console.log(declareWinner())
}

function declareWinner(){
    if (computerScore > playerScore){
        return 'COMPUTER WINS THE GAME'
    }
    else if(playerScore > computerScore){
        return 'PlAYER WINS THE GAME'
    }
    else return 'THE GAME IS A TIE'
}


console.log(game())
