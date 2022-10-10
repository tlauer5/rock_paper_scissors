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

    let playerWins = 0;
    let computerWins = 0;
    let outcome;


    computerSelection = getComputerChoice();
    //playerSelection = prompt("Your turn", "Rock/Paper/Scissor").toLowerCase();
    playerSelection = this.classList.value;

    console.log('PlayersChoice: ' + this.classList.value)

    outcome = decideWinner(playerSelection, computerSelection);
    /*outcome_idx = determineWinner(outcome); // 1 Player wins, -1 Computer wins, 0 Draw
    if ( outcome_idx == 1) {
        if (++playerWins == 3) return "Player";
    } else if (outcome_idx == -1) {
        if (++computerWins == 3) return "Computer"
    }*/

    console.log("Computer's choice: " + computerSelection + "\n" + outcome);   

    //return outcome;
    res.textContent=outcome;
}

res = document.querySelector('.result');

const buttons = document.querySelectorAll('button');
buttons.forEach(btn => btn.addEventListener('click', playRound));

/*const buttons = document.querySelectorAll('.buttons');
buttons.forEach(btn => btn.addEventListener('click', playRound));
*/

//alert("Overall Winner: " + game());





//alert("Player: " + playerSelection + "\nComputer: " + computerSelection + 
  //      "\n\n" + decideWinner(playerSelection, computerSelection));