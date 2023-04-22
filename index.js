let playerSelection = 'rock';
let computerSelection = getComputerChoice()

function getComputerChoice(){
    let items = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random()*3);
    let choice = items[random];
    return choice;
}

console.log(getComputerChoice())

function playRound (playerSelection, computerSelection){
if (playerSelection === computerSelection) {
    console.log('Its a tie')
}
else if (playerSelection === 'rock' && computerSelection ==='paper'){
    console.log('Computer wins this round')
}
else if(playerSelection === 'paper' && computerSelection === 'scissors'){
    console.log('computer wins this round')
}
else if(playerSelection === 'scissors' && computerSelection === 'rock'){
    console.log('computer wins this round')
}
else {
    console.log('Player wins this round')
}
}

playRound(playerSelection, computerSelection)
