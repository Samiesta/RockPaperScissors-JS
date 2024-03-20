const body = document.querySelector("body");

const div = document.createElement("div")
body.appendChild(div)

const rockBtn = document.createElement("button");
rockBtn.setAttribute("class", "game");
rockBtn.textContent = "Rock";
div.appendChild(rockBtn);

const paperBtn = document.createElement("button");
paperBtn.setAttribute("class", "game");
paperBtn.textContent = "Paper";
div.appendChild(paperBtn);

const scissorsBtn = document.createElement("button");
scissorsBtn.setAttribute("class", "game");
scissorsBtn.textContent = "Scissors";
div.appendChild(scissorsBtn);

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * (3-1+1) + 1);
    return (choice == 1) ? "Rock" : (choice == 2) ? "Paper" : "Scissors";
}

const initialize = document.querySelectorAll(".game");
initialize.forEach((btnselect) => {
    btnselect.addEventListener("click", (event) => {


        // let computerSelection = () => {
        //     let choice = Math.floor(Math.random() * (3-1+1) + 1);
        //     return (choice == 1) ? "Rock" : (choice == 2) ? "Paper" : "Scissors";
        // }
        computerSelection = getComputerChoice();
        let playerSelection = event.target.textContent;
        
        if (playerSelection == "Paper" && computerSelection == "Rock") {
            playerScore += 1;
            alert(`You win! ${playerSelection} beats ${computerSelection}`);
        }
        else if (playerSelection == "Rock" && computerSelection == "Scissors") {
            playerScore += 1;
            alert(`You win! ${playerSelection} beats ${computerSelection}`);
        }
        else if (playerSelection == "Scissors" && computerSelection == "Paper") {
            playerScore += 1;
            alert(`You win! ${playerSelection} beats ${computerSelection}`);
        } 
        else if (playerSelection == computerSelection) {
            alert(`It's a tie! Both selected ${playerSelection}`);
        } else {
            computerScore += 1;
            alert(`You lose! ${computerSelection} beats ${playerSelection}`)
        }

        if (playerScore+computerScore > 0) {
            alert(`Player Points: ${playerScore}\nComputer Points: ${computerScore}`);
        }

        if (playerScore == 5 || computerScore == 5) {
            alert((playerScore > computerScore) ? "Player wins the game!" : (computerScore > playerScore) ? "Computer wins the game!" : "The game ends in a tie!");
            playerScore = 0;
            computerScore = 0;
        }
    });
})



// let getComputerChoice = () => Math.floor(Math.random() * (3-1+1) + 1);


// function getComputerChoice() {
//     let choice = Math.floor(Math.random() * (3-1+1) + 1);
//     return (choice == 1) ? "Rock" : (choice == 2) ? "Paper" : "Scissors";
// }

// let computerSelection = getComputerChoice();
// console.log(computerSelection);

// function playRound(playerSelection, computerSelection) {
//     if (playerSelection == "Paper" && computerSelection == "Rock") {
//         return(`You win! ${playerSelection} beats ${computerSelection}`);
//     }
//     else if (playerSelection == "Rock" && computerSelection == "Scissors") {
//         return(`You win! ${playerSelection} beats ${computerSelection}`);
//     }
//     else if (playerSelection == "Scissors" && computerSelection == "Paper") {
//         return(`You win! ${playerSelection} beats ${computerSelection}`);
//     } 
//     else if (playerSelection == computerSelection) {
//         return(`It's a tie! Both selected ${playerSelection}`);
//     } 
//     else {
//         return(`You lose! ${computerSelection} beats ${playerSelection}`);
//     }
// }

// let playerSelection = "Rock";
// console.log(playRound(playerSelection, computerSelection));




// function getComputerChoice() {
//     let choice = Math.floor(Math.random() * (3-1+1) + 1);
//     return (choice == 1) ? "Rock" : (choice == 2) ? "Paper" : "Scissors";
// }


// function playGame (rounds) {
//     for (let i = 0; i < rounds; i++) {
//         let computerSelection = getComputerChoice();
//         let playerSelection = prompt("Rock, Paper, or Scissors?");
//         function playRound(playerSelection, computerSelection) {
//             if (playerSelection == "Paper" && computerSelection == "Rock") {
//                 return(`You win! ${playerSelection} beats ${computerSelection}`);
//             }
//             else if (playerSelection == "Rock" && computerSelection == "Scissors") {
//                 return(`You win! ${playerSelection} beats ${computerSelection}`);
//             }
//             else if (playerSelection == "Scissors" && computerSelection == "Paper") {
//                 return(`You win! ${playerSelection} beats ${computerSelection}`);
//             } 
//             else if (playerSelection == computerSelection) {
//                 return(`It's a tie! Both selected ${playerSelection}`);
//             } 
//             else if (playerSelection != "Rock" && playerSelection != "Paper" && playerSelection != "Scissors") {
//                 return("Invalid selection by the player!")
//             }
//             else {
//                 return(`You lose! ${computerSelection} beats ${playerSelection}`);
//             }
//         }
//         console.log(playRound(playerSelection, computerSelection));

//     }
// }

// console.log(playGame(5));




// function getComputerChoice() {
//     let choice = Math.floor(Math.random() * (3-1+1) + 1);
//     return (choice == 1) ? "Rock" : (choice == 2) ? "Paper" : "Scissors";
// }


// function playGame (rounds) {
//     let playerScore = 0;
//     let computerScore = 0;
//     for (let i = 0; i < rounds; i++) {
//         let computerSelection = getComputerChoice();
//         let playerSelection = prompt("Rock, Paper, or Scissors?");
//         function playRound(playerSelection, computerSelection) {
//             if (playerSelection == "Paper" && computerSelection == "Rock") {
//                 playerScore += 1;
//                 return(`You win! ${playerSelection} beats ${computerSelection}`);
//             }
//             else if (playerSelection == "Rock" && computerSelection == "Scissors") {
//                 playerScore += 1;
//                 return(`You win! ${playerSelection} beats ${computerSelection}`);
//             }
//             else if (playerSelection == "Scissors" && computerSelection == "Paper") {
//                 playerScore += 1;
//                 return(`You win! ${playerSelection} beats ${computerSelection}`);
//             } 
//             else if (playerSelection == computerSelection) {
//                 return(`It's a tie! Both selected ${playerSelection}`);
//             } 
//             else if (playerSelection != "Rock" && playerSelection != "Paper" && playerSelection != "Scissors") {
//                 computerScore += 1;
//                 return("Invalid selection by the player! Rewarding computer a foul point!")
//             }
//             else {
//                 computerScore += 1;
//                 return(`You lose! ${computerSelection} beats ${playerSelection}`);
//             }
//         }
//         console.log(playRound(playerSelection, computerSelection));
//     }
//     alert(`Player Points: ${playerScore}\nComputer Points: ${computerScore}`);
//     alert((playerScore > computerScore) ? "Player wins the game!" : (computerScore > playerScore) ? "Computer wins the game!" : "The game ends in a tie!");
// }



// console.log(playGame(5));


