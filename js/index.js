//1- create a function that generates 1 2 3 randomly
function random() {
  return Math.floor(Math.random() * 3) + 1;
}
//2- create computerPlay() function that will randomly return either ‘Rock’, ‘Paper’ or ‘scissors’
function computerPlay() {
  if (random() === 1) {
    return 'rock';
  } else if (random() === 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
}
//3-initialize a computerSelection variable and assign to it the return value of computerPlay()


//4-create a function that asks the player for a choice of the three and return rock or paper or scissors in lowercase, and handle case senstivity.
function playerChoice() {
  let answer;
  let checkString = true;

  while (checkString === true) {
    answer = prompt(`Choose 'rock' | 'paper' | 'scissors'`);
    if (answer === null || answer === undefined) {
      checkString = false;
      alert("Game Ended!");
    } else if (answer.toLowerCase() === 'rock' || answer.toLowerCase() === 'paper' || answer.toLowerCase() === 'scissors') {
      checkString = false;
      return answer.toLowerCase();
    } else {
      alert(`Please only choose from 'Rock', 'Paper', 'Scissors', or Press Cancel to end the game`);
    }
  }

}


//5-create a one round function which takes the playerSelection and computerSelection, and return whether It's a win or lose or draw.
function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock') {
    if (computerSelection === 'rock') {
      return `It's a Tie game!`;
    } else if (computerSelection === 'paper') {
      return `You Lose! Paper beats Rock`;
    } else if (computerSelection === 'scissors') {
      return `You Win! Rock beats Scissors`;
    }
  } else if (playerSelection === `paper`) {
    if (computerSelection === 'paper') {
      return `It's a Tie game!`;
    } else if (computerSelection === 'rock') {
      return `You Win! Paper beats Rock`;
    } else if (computerSelection === 'scissors') {
      return `You Lose! Scissors beats Paper`;
    }
  } else if (playerSelection === `scissors`) {
    if (computerSelection === 'scissors') {
      return `It's a Tie game!`;
    } else if (computerSelection === 'rock') {
      return `You Lose! Rock beats Scissors`;
    } else if (computerSelection === 'paper') {
      return `You Win! Scissors beats Paper`;
    }
  }
}

//function game() loops the playRound() function and keep scores for the computer and the player until either the player or the computer reach a score of 5. 
function game() {
  let playerScore = 0, computerScore = 0;
  while (playerScore !== 5 && computerScore !== 5) {
    let computerSelection = computerPlay();
    let playerSelection = playerChoice();
    console.log(playRound(playerSelection, computerSelection))
    if (playRound(playerSelection, computerSelection).includes('Win')) {
      ++playerScore;
      console.log(`playerScore: ${playerScore}`);
      console.log(`computerScore: ${computerScore}`);
      console.log("========================")
    } else if (playRound(playerSelection, computerSelection).includes('Lose')) {
      ++computerScore
      console.log(`playerScore: ${playerScore}`);
      console.log(`computerScore: ${computerScore}`);
      console.log("========================")
    }
  }

  if (playerScore === 5) {
    console.log(`%c Nice! You Win the game`, `font-size: 30px; color: green;`)
  } else {
    console.log("%c Game Over! Better luck next time", `font-size: 30px; color: red;`)
  }
}

game();

