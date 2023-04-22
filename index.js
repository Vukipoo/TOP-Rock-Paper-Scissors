let userChoice = '';


function getComputerChoice(){
    let items = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random()*3);
    let choice = items[random];
    return choice;
}

console.log(getComputerChoice())


/* if (userChoice === 'rock' && computerChoice ==='paper'){
    console.log('Computer wins this round')
}
else if(userChoice === 'paper' && computerChoice === 'scissors'){
    console.log('computer wins this round')
}
else if(userChoice === 'scissors' && computerChoice === 'rock'){
    console.log('computer wins this round')
}
else {
    console.log('Player wins this round')
} */