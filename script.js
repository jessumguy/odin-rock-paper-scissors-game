let gameRound = 0;
let playerScore = 0;
let computerScore = 0;

// CPU selection of Rock, Paper or Scissors.
let computerPlay = () => {
  let computerSelection = returnRandomChoice().toString();
  return computerSelection;
}


// Function that returns randomized values: Rock, Paper or Scissors. 
let returnRandomChoice = () => {
  let choice = Math.floor(Math.random() * 3);

  switch (choice) {
    case 0:
      choice = 'rock';
      break;
    case 1:
      choice = 'paper';
      break;
    case 2:
      choice = 'scissors';
      break; 
    default:
      console.log('If this triggers, something is not working')
  }
  
  return choice;
}


// Function that compares the playerSelection with the computerSelection.
let playRound = (playerSelection, computerSelection) => {

  pChoice.textContent = `Player Choice: ${playerSelection}`;
  cChoice.textContent = `Computer Choice: ${computerSelection}`;

  console.log(`Player Choice: ${playerSelection} \n Computer Choice: ${computerSelection}`);

  if (playerSelection === 'rock'){
    switch (playerSelection === 'rock'){
      case(computerSelection === 'paper'):
        return "LOSE";
      case(computerSelection === 'scissors'):
        return "WIN";
      default:
        return "TIE";
    }
  } else if (playerSelection === 'paper'){
    switch (playerSelection === 'paper'){
      case(computerSelection === 'rock'):
        return "WIN";
      case(computerSelection === 'scissors'):
        return "LOSE";
      default:
        return "TIE";
    }
  } else if (playerSelection === 'scissors'){
    switch (playerSelection === 'scissors'){
      case(computerSelection === 'rock'):
        return "LOSE";
      case(computerSelection === 'paper'):
        return "WIN";
      default:
        return "TIE";
    }
  } 
}


// function that plays five games, keeping track of each player's score, and passes it to the announceGameResult().
let playGame = () => {
  let playerSelection = playerChoice;
  let computerSelection = computerPlay();

  switch(playRound(playerSelection, computerSelection)) {
    case("WIN"):
      gRound.textContent = `Round ${gameRound+1}: WON`;
      console.log(`Round ${gameRound+1}: WON`);
      playerScore++;
      break;
    case("LOSE"):
      gRound.textContent = `Round ${gameRound+1}: LOSS`;
      console.log(`Round ${gameRound+1}: LOSS`);
      computerScore++;
      break;
    default:
      gRound.textContent = `Round ${gameRound+1}: TIE`;
      console.log(`Round ${gameRound+1}: TIE`);
  }
  gameRound++

  playerScoring.textContent = playerScore;
  computerScoring.textContent = computerScore;
  console.log(`Player Score ${playerScore}`);
  console.log(`Computer Score ${computerScore}`);
  
  if (gameRound === 5) {
    announceGameResult(playerScore, computerScore);
  }
}


// Function that takes score from the playGame(), and evaluates game result from the player's perspective
let announceGameResult = (playerScore, computerScore) => {
  
  if (playerScore > computerScore) {
    gResult.textContent = `Game Won!`
    console.log("Game Won!")
  } else if (playerScore < computerScore){
    gResult.textContent = `Game Loss!`
    console.log("Game Loss!")
  } else {
    gResult.textContent = `Game Tie!`
    console.log("Game Tie!")
  }

  // Disables buttons after 5 rounds and add resetButton to DOM
  for (let i = 0; i < rpsButtons.length; i++) {
    rpsButtons[i].disabled = true;
    rpsButtons[i].classList.add('disabled');
    rpsButtons[i].classList.remove('btn_hover')
  }

  roundResults.appendChild(resetButton);
  resetButton.classList.add('btn_hover')
}

// rpsButtons to change state of buttons after an event - Used in nnounceGameResult()
const rpsButtons = document.getElementById('player-selections').children;


// Assign value to buttons
const playerSelections = document.getElementById('player-selections').querySelectorAll('button');

playerSelections.forEach(button => button.addEventListener('click', (e) => {
  playerChoice = e.target.value;
  playGame();
}));


// Player and CPU Scoreboard - Value is dynamically increments in announceGameResult()
const playerScoreboard = document.querySelector('#playerscore');
const playerScoring = document.createElement('p');
playerScoreboard.appendChild(playerScoring);

const computerScoreboard = document.querySelector('#computerscore');
const computerScoring = document.createElement('p');
computerScoreboard.appendChild(computerScoring);


// Status Report - Displays the score and result of each round
const roundResults = document.querySelector('#round-results');
const gRound = document.createElement('p');
const pChoice = document.createElement('p');
const cChoice = document.createElement('p');
const gResult = document.createElement('p');
roundResults.appendChild(gRound);
roundResults.appendChild(pChoice);
roundResults.appendChild(cChoice);
roundResults.appendChild(gResult);

// Reset button refreshes the page. It is added to DOM after 5 rounds in announceGameResult()
const resetButton = document.createElement('button');
resetButton.textContent = `RESET`;

resetButton.addEventListener('click', (refresh) => {
  location.reload();
});

