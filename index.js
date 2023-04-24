

function getComputerChoice(){
    let items = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random()*3);
    let choice = items[random];
    return choice;
}
     
     computerSelection = getComputerChoice();


function playRound (playerSelection, computerSelection){
    
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

 


let computerScore = 0;
let playerScore = 0;

function handleButtonClick(event) {
    let playerSelection = event.target.id;
    let computerChoice = getComputerChoice();
    let result = playRound(playerSelection, computerChoice);

    if(result.includes('player')) {
        playerScore++
    }
    else if(result.includes('computer')){
        computerScore++
    }
    playerScoreDisplay.innerHTML = `Player: ${playerScore}`
    computerScoreDisplay.innerHTML = `Computer: ${computerScore}`
    display2.innerHTML = result;


    if (playerScore === 5 || computerScore === 5) {
        display.innerHTML = declareWinner();
  }
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




let rockBtn = document.querySelector('#rock')
let paperBtn = document.querySelector('#paper')
let scissorsBtn = document.querySelector('#scissors')

rockBtn.addEventListener('click', handleButtonClick)
paperBtn.addEventListener('click', handleButtonClick)
scissorsBtn.addEventListener('click', handleButtonClick)

let display = document.createElement('div');
let display2 = document.createElement('div')
let playerScoreDisplay = document.createElement('div')
let computerScoreDisplay = document.createElement('div')
let container = document.querySelector('.container')
container.appendChild(display)
container.appendChild(display2)
container.appendChild(playerScoreDisplay)
container.appendChild(computerScoreDisplay)

