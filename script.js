// CPU selection of Rock, Paper or Scissors.
let computerPlay = () => {
  let computerSelection = returnRandomChoice().toString();
  return computerSelection;
}


// Function that returns randomized values: Rock, Paper or Scissors. 
let returnRandomChoice = () => {
  let choice = Math.floor(Math.random() * 3);
  //console.log(choice);

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

// console.log(computerPlay());

// Player's input of value into prompt: Rock, Paper or Scissors. Input is case-insensitive.
let playerPlay = () => {
  let playerSelection = prompt('Rock, paper or scissors')?.toLowerCase();

  if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors'){
    return playerSelection;
  } else {
    playerSelection = false;
    console.log('Invalid Input'); 
  }
} 

// Function that compares the playerSelection with the computerSelection.
let playRound = (playerSelection, computerSelection) => {

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

// playRound('rock', 'paper');
// playRound('paper', 'paper');

// function that plays five games, keeping track of each player's score, and passes it to the announceGameResult().
let playGame = () => {

  let gameRound = 0;
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = playerPlay();
    let computerSelection = computerPlay();
    gameRound++

    switch(playRound(playerSelection, computerSelection)) {
      case("WIN"):
        console.log(`Round ${i+1}: WON`);
        playerScore++;
        break;
      case("LOSE"):
        console.log(`Round ${i+1}: LOSS`);
        computerScore++;
        break;
      default:
        console.log(`Round ${i+1}: TIE`);
    }

    console.log(`Player Score ${playerScore}`);
    console.log(`Computer Score ${computerScore}`);
  }

  announceGameResult(playerScore, computerScore);
}


// Function that takes score from the playGame(), and evaluates game result from the player's perspective
let announceGameResult = (playerScore, computerScore) => {
  if (playerScore > computerScore) {
    console.log("Game Won!")
  } else if (playerScore < computerScore){
    console.log("Game Loss!")
  } else {
    console.log("Game Tie!")
  }
}

// console.log(announceGameResult(3,2)); // Game Won
// console.log(announceGameResult(2,2)); // Game Tie
// console.log(announceGameResult(2,3)); // Game Loss

playGame();