//1- create a function that generates 1 2 3 randomly
function random() {
  return Math.floor(Math.random() * 3) + 1;
}
//2- create computerPlay() function that will randomly return either ‘Rock’, ‘Paper’ or ‘scissors’
function computerPlay() {
  let randomNum = random();
  if (randomNum === 1) {
    return 'rock';
  } else if (randomNum === 2) {
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
  let score = [0,0];
  while (score[0] !== 5 && score[1] !== 5) {
    let resultMessage = playRound(playerChoice(), computerPlay());
    if(resultMessage === undefined) {
      break;
    } else {
      roundWinner(resultMessage,score);
    }
  }
  checkWinner(score);
}


//function to add score
function roundWinner(resultMessage,score){
  if (resultMessage.includes('Win')) {
    ++score[0];
    console.log(`%c ${resultMessage}`, `color: green;`);
    console.log(`%c playerScore: ${score[0]}`,`color: green;`);
    console.log(`%c computerScore: ${score[1]}`, `color: red`);
    console.log("%c ========================", `color: gray;`)
  } else if (resultMessage.includes('Lose')) {
    ++score[1];
    console.log(`%c ${resultMessage}`, `color: red;`);
    console.log(`%c playerScore: ${score[0]}`,`color: green;`);
    console.log(`%c computerScore: ${score[1]}`, `color: red`);
    console.log("%c ========================", `color: gray;`)
  } else {
    console.log(`%c ${resultMessage}`, `color: white;`);
    console.log(`%c playerScore: ${score[0]}`,`color: green;`);
    console.log(`%c computerScore: ${score[1]}`, `color: red`);
    console.log("%c ========================", `color: gray;`)
  }
}

// a function to show the winner a custom colorful text of the game according to the score.
function checkWinner(score) {
  if (score[0] === 5) {
    console.log(`%c =====================================`, `color: green;`);
    console.log(`%c Nice! You Win the game`, `color: green;`)
    console.log(`%c =====================================`, `color: green;`);
  } else if (score[1] === 5) {
    console.log(`%c =====================================`, `color: red;`);
    console.log("%c Game Over! Better luck next time", `color: red;`)
    console.log(`%c =====================================`, `color: red;`);
  } else {
    console.log(`%c =====================================`, `color: yellow;`);
    console.log("%c you quit the game!", `color: yellow;`);
    console.log(`%c Your final score was: ${score[0]}`, `color: yellow;`);
    console.log(`%c Computer final score was: ${score[1]}`, `color: yellow;`)
    console.log(`%c Reload the page to start a new game.`, `color: yellow;`)
    console.log(`%c =====================================`, `color: yellow;`);
  }
}

game();

