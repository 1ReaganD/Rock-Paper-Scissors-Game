// Logic to getComputerChoice
function getComputerChoice() {
  return Math.floor(Math.random() * 3) + 1;
}

// Logic to get human choice
function getHumanChoice(word) {
  if (word === "Rocks") {
    return 1;
  } else if (word === "Paper") {
    return 2;
  } else if (word === "Scissors") {
    return 3;
  }
}

// Logic to single round the game
let humanScore = 0;
let computerScore = 0;
function playRound(computerChoice, humanChoice) {
  if (computerChoice === humanChoice) {
    console.log("It's a tie you choose the same thing as the computer");
    if (computerChoice == 1) {
      console.log("Rocks cannot beat Rocks");
    } else if (computerChoice === 2) {
      console.log("Paper cannot beat Paper");
    } else if (computerChoice === 3) {
      console.log("Scissors cannot beat Scissors");
    }
  } else if (computerChoice == 1 && humanChoice == 2) {
    console.log("Congratulation you have just won the round");
    console.log("Human Choice: Paper can beat Computer choice: Rocks");
    humanScore++;
    humanScoreToHtml.textContent = humanScore;
  } else if (computerChoice === 1 && humanChoice == 3) {
    console.log("Sorry, you lost just try again in next round");
    console.log("Human Choice : Scissors cannot beat Computer Choice : Rocks");
    computerScore++;
    computerScoreToHtml.textContent = computerScore;
  } else if (computerChoice === 2 && humanChoice == 3) {
    console.log("Congratulation you have just won the round");
    console.log("Human Choice : Scissors can beat Computer Choice : Paper");
    humanScore++;
    humanScoreToHtml.textContent = humanScore;
  }

  else if (computerChoice == 2 && humanChoice == 1) {
    console.log("Sorry, you lost just try again in next round");
    console.log("Human Choice : Rocks cannot beat Computer choice : Papers");
    computerScore++;
    computerScoreToHtml.textContent = computerScore;
  } else if (computerChoice === 3 && humanChoice == 1) {
    console.log("Congratulation you have just won the round");
    console.log("Human choice : Rocks can beat Computer choice : Scissors");
    humanScore++;
    humanScoreToHtml.textContent = humanScore;
  } else if (computerChoice === 3 && humanChoice == 2) {
    console.log("Sorry, you lost just try again in next round");
    console.log("Human choice : Paper cannot beat Computer choice : Scissors");
    computerScore++;
    computerScoreToHtml.textContent = computerScore;
  }
}

const rocks = document.querySelector("#rocks");

rocks.addEventListener("click", function () {
  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice("Rocks");
  playRound(computerChoice, humanChoice);
  const result = document.querySelector("#result");

  // Clear previous result if needed
  result.textContent = '';

  const td = document.createElement("td");
  td.textContent = 1;
  result.appendChild(td);

  const td1 = document.createElement("td");
  td1.textContent = humanChoice;
  if (td1.textContent == 1) {
    td1.textContent = "Rocks";
  }
  result.appendChild(td1);

  const td2 = document.createElement("td");
  td2.textContent = getChoiceNameForHtml(computerChoice);
  result.appendChild(td2);

  const td3 = document.createElement("td");
  if (humanChoice === computerChoice) {
    td3.textContent = "Tie";
  } else if (
    (humanChoice === 1 && computerChoice === 3) ||
    (humanChoice === 2 && computerChoice === 1) ||
    (humanChoice === 3 && computerChoice === 2)
  ) {
    td3.textContent = "You";
  }
  else {
    td3.textContent = "Computer";
  }
  result.appendChild(td3);
});

const papers = document.querySelector("#paper");

papers.addEventListener("click", function () {
  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice("Paper");
  playRound(computerChoice, humanChoice);
  const result = document.querySelector("#result");

  // Clear previous result if needed
  result.textContent = '';

  const td = document.createElement("td");
  td.textContent = 1;
  result.appendChild(td);

  const td1 = document.createElement("td");
  td1.textContent = humanChoice;
  if (td1.textContent == 2) {
    td1.textContent = "Paper";
  }
  result.appendChild(td1);

  const td2 = document.createElement("td");
  td2.textContent = getChoiceNameForHtml(computerChoice);
  result.appendChild(td2);

  const td3 = document.createElement("td");
  if (humanChoice === computerChoice) {
    td3.textContent = "Tie";
  } else if (
    (humanChoice === 1 && computerChoice === 3) ||
    (humanChoice === 2 && computerChoice === 1) ||
    (humanChoice === 3 && computerChoice === 2)
  ) {
    td3.textContent = "You";
  }
  else {
    td3.textContent = "Computer";
  }
  result.appendChild(td3);
});

const Scissors = document.querySelector("#scissors");

Scissors.addEventListener("click", function () {
  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice("Scissors");
  playRound(computerChoice, humanChoice);
  const result = document.querySelector("#result");
  // Clear previous result if needed
  result.textContent = '';

  const td = document.createElement("td");
  td.textContent = 1;
  result.appendChild(td);

  const td1 = document.createElement("td");
  td1.textContent = humanChoice;
  if (td1.textContent == 3) {
    td1.textContent = "Scissors";
  }
  result.appendChild(td1);

  const td2 = document.createElement("td");
  td2.textContent = getChoiceNameForHtml(computerChoice);
  result.appendChild(td2);

  const td3 = document.createElement("td");
  if (humanChoice === computerChoice) {
    td3.textContent = "Tie";
  } else if (
    (humanChoice === 1 && computerChoice === 3) ||
    (humanChoice === 2 && computerChoice === 1) ||
    (humanChoice === 3 && computerChoice === 2)
  ) {
    td3.textContent = "You";
  }
  else {
    td3.textContent = "Computer";
  }
  result.appendChild(td3);
});

// Helper function to convert choice number to text
function getChoiceNameForHtml(choice) {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[choice - 1];
}

const humanScoreToHtml = document.querySelector("#humanScore");

const computerScoreToHtml = document.querySelector("#computerScore");

