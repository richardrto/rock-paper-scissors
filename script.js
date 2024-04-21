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

function getPlayerSelection() {
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