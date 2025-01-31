// global variables
let playAgain = true; // tracks if player want's to play again
let playerScore = 0; // Initialize the player's score to 0
let computerScore = 0; // Initialize the computer's score to 0

// Function to randomly choose between "rock", "paper", and "scissors"
function computerPlay() {
  const choices = ["rock", "paper", "scissors"]; // List of possible choices for the computer
  const randomIndex = Math.floor(Math.random() * 3); // Random index from 0 to 2 (0 = rock, 1 = paper, 2 = scissors)
  return choices[randomIndex]; // Return the choice at the random index
}

// Function to compare the user's choice with the computer's choice using switch
function playRound(playerSelection, computerSelection) {
  switch (
    playerSelection // Switch based on the player's selection
  ) {
    case "rock": // If the player's choice is "rock"
      switch (
        computerSelection // Switch based on the computer's choice
      ) {
        case "rock":
          return "It's a tie! ✋"; // If both choose rock, it's a tie
        case "paper":
          return "You lose! Paper 🧻 beats Rock 🧱"; // If the computer chooses paper, the player loses
        case "scissors":
          return "You win! Rock 🧱 beats Scissors ✂️"; // If the computer chooses scissors, the player wins
      }
      break;
    case "paper": // If the player's choice is "paper"
      switch (
        computerSelection // Switch based on the computer's choice
      ) {
        case "rock":
          return "You win! Paper 🧻 beats Rock 🧱"; // Paper beats rock
        case "paper":
          return "It's a tie! ✋"; // If both choose paper, it's a tie
        case "scissors":
          return "You lose! Scissors ✂️ beats Paper 🧻"; // Scissors beats paper
      }
      break;
    case "scissors": // If the player's choice is "scissors"
      switch (
        computerSelection // Switch based on the computer's choice
      ) {
        case "rock":
          return "You lose! Rock 🧱 beats Scissors ✂️"; // Rock beats scissors
        case "paper":
          return "You win! Scissors ✂️ beats Paper 🧻"; // Scissors beats paper
        case "scissors":
          return "It's a tie! ✋"; // If both choose scissors, it's a tie
      }
      break;
    default:
      return "Invalid choice!"; // If the player's input is invalid (not rock, paper, or scissors)
  }
}

// Function returns emoji based on round number
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

// Function to play the game
function game() {
  // Play 5 rounds of the game

  for (let round = 1; round <= 5; round++) {
    let playerSelection = prompt(
      `Round ${roundEmoji(
        round
      )} \nEnter your choice (rock, paper, or scissors):`
    ).toLowerCase(); // Prompt player for input and convert to lowercase
    const computerSelection = computerPlay(); // Get the computer's random choice

    while (
      playerSelection !== "rock" &&
      playerSelection !== "paper" &&
      playerSelection !== "scissors"
    ) {
      console.log("Incorrect choice 😡 , please try again");
      playerSelection = prompt(
        `Round  ${roundEmoji(
          round
        )} \nEnter valid choice (rock, paper, or scissors):`
      ).toLowerCase();
    }

    console.log(`Round ${round}:`); // Display the current round number in the console
    console.log(`You chose: ${playerSelection}`); // Display the player's choice
    console.log(`Computer chose: ${computerSelection}`); // Display the computer's choice

    const result = playRound(playerSelection, computerSelection); // Call playRound to get the result of this round
    console.log(result); // Display the result of the round

    // Update the score based on the round result okay
    if (result.includes("win")) {
      // If the result includes "win" (the player won)
      playerScore++; // Increment player's score
    } else if (result.includes("lose")) {
      // If the result includes "lose" (the player lost)
      computerScore++; // Increment computer's score
    }
  }

  // Display the final score and who won
  if (playerScore > computerScore) {
    // If the player has more points than the computer
    console.log(
      `You win the game! Final score: You - ${playerScore}, Computer - ${computerScore}`
    );
    alert(
      `🎉 You win the game! 🎉 Final score: You - ${playerScore}, Computer - ${computerScore} 🏆`
    );
  } else if (playerScore < computerScore) {
    console.log(
      `You lose the game! Final score: You - ${playerScore}, Computer - ${computerScore}`
    ); // Display player's loss message
    alert(
      `😭 You lose the game! 😭 Final score: You - ${playerScore}, Computer - ${computerScore} 💔`
    );
  } else {
    // If both the player and computer have the same score
    console.log(
      `It's a tie game! Final score: You - ${playerScore}, Computer - ${computerScore}`
    ); // Display tie message
    alert(
      `🤝 It's a tie game! 🤝 Final score: You - ${playerScore}, Computer - ${computerScore} ⚖️`
    ); // Alert  if it's a tie
  }
}

alert(
  "Welcome to the Rock 🧱 Paper 📝 ! Scissors ✂️ Game.  😎 You are about to start the game. Can you beat me 🤔"
);
alert(
  `Here are the rules 📜 \n  
  1. Rock 🧱 beats Scissors ✂️  \n 
  2. Paper 📝 beats  Rock 🧱 \n
  3. Scissors ✂️ beats Paper 📝`
);

while (playAgain) {
  // Start the game
  game(); // Call the game function to start the game
  playAgain = confirm("Do you want to play again 🔄? (ok(yes) / cancel(no))");
  playerScore = 0; // reset player score
  computerScore = 0; // reset computer score
  console.clear();
}

console.log(`Thank you for playing 😀, Hope you had a lot of fun 🎉`);
console.log(`See you soon 👋`);
