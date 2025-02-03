let playAgain = true;
let playerScore = 0;
let computerScore = 0; 
let playerSelection;

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  switch (
    playerSelection 
  ) {
    case "rock":
      switch (
        computerSelection 
      ) {
        case "rock":
          return "It's a tie! ✋";
        case "paper":
          return "You lose! Paper 🧻 beats Rock 🧱"; 
        case "scissors":
          return "You win! Rock 🧱 beats Scissors ✂️"; 
      }
      break;
    case "paper":
      switch (
        computerSelection
      ) {
        case "rock":
          return "You win! Paper 🧻 beats Rock 🧱"; 
        case "paper":
          return "It's a tie! ✋"; 
        case "scissors":
          return "You lose! Scissors ✂️ beats Paper 🧻"; 
      }
      break;
    case "scissors": 
      switch (
        computerSelection
      ) {
        case "rock":
          return "You lose! Rock 🧱 beats Scissors ✂️"; 
        case "paper":
          return "You win! Scissors ✂️ beats Paper 🧻";
        case "scissors":
          return "It's a tie! ✋";
      }
      break;
    default:
      return "Invalid choice!"; 
  }
}

function roundEmoji(round) {
  switch (round) {
    case 1:
      return "\u0031\uFE0F\u20E3";
    case 2:
      return "\u0032\uFE0F\u20E3";
    case 3:
      return "\u0033\uFE0F\u20E3";
    case 4:
      return "\u0034\uFE0F\u20E3";
    case 5:
      return "\u0035\uFE0F\u20E3";
  }
}

function getPlayeInput(round){
  playerSelection = prompt(
    `Round ${roundEmoji(
      round
    )}          You: ${playerScore}     vs    Computer: ${computerScore} \nEnter your choice (rock, paper, or scissors):`
  ); 
  if (playerSelection === null) {
    console.log("You have cancelled the game 😢");
    alert("You have cancelled the game 😢");
    return playerSelection; 
  }
  else {
    playerSelection = playerSelection.toLowerCase().trim();
    return playerSelection;
  }
}


function game() {
    
  alert(
    "Welcome to the Rock 🧱 Paper 📝 ! Scissors ✂️ Game.  😎 You are about to start the game. Can you beat me 🤔"
  );
  alert(
    `Here are the rules 📜 \n  
    1. Rock 🧱 beats Scissors ✂️  \n 
    2. Paper 📝 beats  Rock 🧱 \n
    3. Scissors ✂️ beats Paper 📝`
  );
  alert(
    "For a smooth interaction you have to open the console to see the results and some advice of the game 🎉. \n\n" + 
    "To achieve this, you have to press F12 or right click on the page and click on inspect. \n" +
    "Then click on the console tab. \n\n" +
    "Now you are ready to play the game 🎉. \n\n");
  
  for (let round = 1; round <= 5; round++) {
    playerSelection = getPlayeInput(round); 
    const computerSelection = computerPlay(); 
    if (playerSelection === null) {
      break;
    }
    while (
      playerSelection !== "rock" &&
      playerSelection !== "paper" &&
      playerSelection !== "scissors" 
    ) {
      console.log("Incorrect choice 😡 , please try again");
      playerSelection = getPlayeInput(round);
    }

    console.log(`Round ${round}:`); 
    console.log(`You chose: ${playerSelection}`); 
    console.log(`Computer chose: ${computerSelection}`); 

    const result = playRound(playerSelection, computerSelection); 
    alert(`Round ${round}: \n` + 
      `${result}`
    )
    console.log(result);

    if (result.includes("win")) {
      playerScore++; 
    } else if (result.includes("lose")) {
      computerScore++; 
    }
  }

  if(playerSelection !== null){
    if (playerScore > computerScore) {
      console.log(
        `You won! 🎉 Your score: ${playerScore}, Computer's score: ${computerScore}`
      );
      alert(
        `You won! 🎉 Your score: ${playerScore}, Computer's score: ${computerScore}`
      );
    } else if (playerScore < computerScore) {
      console.log(
        `You lost! 😢 Your score: ${playerScore}, Computer's score: ${computerScore}`
      );
      alert(
        `You lost! 😢 Your score: ${playerScore}, Computer's score: ${computerScore}`
      );
    } else {
      console.log(
        `It's a tie! ✋ Your score: ${playerScore}, Computer's score: ${computerScore}`
      );
      alert(
        `It's a tie! ✋ Your score: ${playerScore}, Computer's score: ${computerScore}`
      );
    }
  } 
}

while (playAgain) {
  game(); 
  playAgain = confirm("Do you want to play again 🔄? (ok(yes) / cancel(no))");
  playerScore = 0;
  computerScore = 0;
  console.clear();
}

console.log(`Thank you for playing 😀, Hope you had a lot of fun 🎉`);
console.log(`See you soon 👋`);
