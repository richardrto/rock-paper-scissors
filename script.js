function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    switch (num) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}

function getPlayerChoice() {
    return prompt('Enter your choice:');
}

function playRound(playerSelection, computerSelection) {
    return playerSelection == computerSelection ? 'It\'s a tie!'
        : playerSelection == 'rock' && computerSelection == 'paper' ? 'Computer wins!'
        : playerSelection == 'rock' && computerSelection == 'scissors' ? 'Player wins!'
        : playerSelection == 'paper' && computerSelection == 'rock' ? 'Player wins!'
        : playerSelection == 'paper' && computerSelection == 'scissors' ? 'Computer wins!'
        : playerSelection == 'scissors' && computerSelection == 'rock' ? 'Computer wins!'
        : playerSelection == 'scissors' && computerSelection == 'paper' ? 'Player wins!'
        : 'Hm, this is a strange outcome. Try again.';
}

function playGame() {
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++) {
        let winner = playRound(getPlayerChoice(), getComputerChoice());
        winner == 'Player wins!' ? playerWins++ : computerWins++;
        console.log(winner);
    }
    return playerWins > computerWins ? 'Player has won the game!' : 'Computer has won the game!';
}