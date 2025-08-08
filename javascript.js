// Logic to getComputerChoice
function getComputerChoice() {
  return Math.floor(Math.random() * 3) + 1;
}

// let a = getComputerChoice();

// console.log(a);

// if (a == 1) {
//   console.log("Rocks");
// } else if (a == 2) {
//   console.log("Paper");
// } else if (a == 3) {
//   console.log("Scissors");
// } else {
//   console.log("Nothing there");
// }

// Logic to getHumanChoice

function getHumanChoice() {
  let a1 = prompt("Please enter any of these Rocks, Paper or Scissors");
  if (a1 === "Rocks") {
    return 1;
  } else if (a1 === "Paper") {
    return 2;
  } else if (a1 === "Scissors") {
    return 3;
  }
}

// let b = getHumanChoice();

// console.log(b);

// Logic to single round the game

let humanScore = 0;

let computerScore = 0;

function playRound(computerChoice, humanChoice) {
  if (computerChoice === humanChoice) {
    console.log("It's a tie you choose the same thing as the computer");
    if (computerChoice == 1){
      console.log("Rocks cannot beat Rocks");
    }else if (computerChoice === 2){
      console.log("Paper cannot beat Paper");
    }else if (computerChoice === 3){
      console.log("Scissors cannot beat Scissors");
    }
  } else if (computerChoice < humanChoice) {
    console.log("Congratulation you have just won the round");
    if (computerChoice == 1 && humanChoice == 2){
      console.log("Paper can beat Rocks");
    }else if (computerChoice === 1 && humanChoice == 3){
      console.log("Scissors can beat Rocks");
    }else if (computerChoice === 2 && humanChoice == 3){
      console.log("Scissors can beat Paper");
    }
    humanScore++;
  } else if (computerChoice > humanChoice) {
    console.log("Sorry, you lost just try again in next round");
    if (computerChoice == 2 && humanChoice == 1){
      console.log("Paper can beat Rocks");
    }else if (computerChoice === 3 && humanChoice == 1){
      console.log("Scissors can beat Rocks");
    }else if (computerChoice === 3 && humanChoice == 2){
      console.log("Scissors can beat Paper");
    }
    computerScore++;
  }
}



// Logic to play the entire game

function playGame() {
  const computerSelection = getComputerChoice();

  console.log(computerSelection);

  const humanSelection = getHumanChoice();

  console.log(humanSelection);

  playRound(computerSelection, humanSelection);
}

playGame();
playGame();
playGame();
playGame();
playGame();

if (humanScore > computerScore){
  console.log("Congrats player you just won the Game " + humanScore + " by " + computerScore + " nice");
}else{
  console.log("What a loser! Hahahahah"  + humanScore + " by " + computerScore + " Loser");
}