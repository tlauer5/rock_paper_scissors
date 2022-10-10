function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    
    return (randomNumber == 0 ? "Rock" : 
    randomNumber == 1 ? "Paper" : "Scissor");

}

function decideWinner(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "Draw";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
        return "You Win! Rock beats Scissor";
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
        return "You Lose! Scissor beats paper";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock";
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        return "You Win! Scissor beats paper";
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissor";
    } else {
        return "error";
    }
}


function determineWinner (str) {
    //Looks at return string from decideWinner()
    //1 Player wins, -1 Computer wins, 0 Draw
    if (str[4] === "W") return 1;
    else if (str[4] === "L") return -1;
    else return 0; 
}

function playRound() {
    
    let playerSelection; //= getComputerChoice();
    let computerSelection; //= getComputerChoice();
    let outcome;

    computerSelection = getComputerChoice();
    playerSelection = this.classList.value;

    outcome = decideWinner(playerSelection, computerSelection);
    outcome_idx = determineWinner(outcome); // 1 Player wins, -1 Computer wins, 0 Draw
    
    res.textContent=outcome;

    updateScoreboard(outcome_idx);
}


function reset() {

    playerWins = 0; 
    computerWins = 0; 
    playerScore.textContent = playerWins;
    computerScore.textContent = computerWins; 
    winningMessage.textContent = "";
}

function updateScoreboard(winner) {

    if(winner === 1) {
        playerWins++;
        playerScore.textContent = playerWins;
        if(playerWins === 5) {
            winningMessage.textContent = "You won the overall game! Congrats:)";

            setTimeout(reset, 5000);
        }
    }
    else if (winner === -1) {
        computerWins++;
        computerScore.textContent = computerWins; 
        if(computerWins === 5) {
            winningMessage.textContent = "You lost the overall game:(";
            setTimeout(reset, 5000);
        }
    }
}

let playerWins = 0; 
let computerWins = 0; 

const winningMessage = document.querySelector('h3');
const res = document.querySelector('.result');
const playerScore = document.querySelector('.score-player');
playerScore.textContent = playerWins;
const computerScore = document.querySelector('.score-computer');
computerScore.textContent = computerWins; 
const buttons = document.querySelectorAll('button');
buttons.forEach(btn => btn.addEventListener('click', playRound));
