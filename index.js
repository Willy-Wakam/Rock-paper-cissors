// Function to randomly choose between "rock", "paper", and "scissors"
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']; // List of possible choices for the computer
    const randomIndex = Math.floor(Math.random() * 3); // Random index from 0 to 2 (0 = rock, 1 = paper, 2 = scissors)
    return choices[randomIndex]; // Return the choice at the random index
  }
  
  // Function to compare the user's choice with the computer's choice using switch
  function playRound(playerSelection, computerSelection) {
    switch (playerSelection) { // Switch based on the player's selection
      case 'rock': // If the player's choice is "rock"
        switch (computerSelection) { // Switch based on the computer's choice
          case 'rock':
            return "It's a tie! ✋"; // If both choose rock, it's a tie
          case 'paper':
            return 'You lose! Paper beats Rock ✋🪨'; // If the computer chooses paper, the player loses
          case 'scissors':
            return 'You win! Rock beats Scissors 🪨✂️'; // If the computer chooses scissors, the player wins
        }
        break;
      case 'paper': // If the player's choice is "paper"
        switch (computerSelection) { // Switch based on the computer's choice
          case 'rock':
            return 'You win! Paper beats Rock 🧻🪨'; // Paper beats rock
          case 'paper':
            return "It's a tie! ✋"; // If both choose paper, it's a tie
          case 'scissors':
            return 'You lose! Scissors beats Paper ✂️🧻'; // Scissors beats paper
        }
        break;
      case 'scissors': // If the player's choice is "scissors"
        switch (computerSelection) { // Switch based on the computer's choice
          case 'rock':
            return 'You lose! Rock beats Scissors 🪨✂️'; // Rock beats scissors
          case 'paper':
            return 'You win! Scissors beats Paper ✂️🧻'; // Scissors beats paper
          case 'scissors':
            return "It's a tie! ✋"; // If both choose scissors, it's a tie
        }
        break;
      default:
        return "Invalid choice!"; // If the player's input is invalid (not rock, paper, or scissors)
    }
  }
  
  // Function to play the game
  function game() {
    let playerScore = 0; // Initialize the player's score to 0
    let computerScore = 0; // Initialize the computer's score to 0
  
    // Play 5 rounds of the game
    for (let round = 1; round <= 5; round++) {
      const playerSelection = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase(); // Prompt player for input and convert to lowercase
      const computerSelection = getComputerChoice(); // Get the computer's random choice
  
      console.log(`Round ${round}:`); // Display the current round number in the console
      console.log(`You chose: ${playerSelection}`); // Display the player's choice
      console.log(`Computer chose: ${computerSelection}`); // Display the computer's choice
  
      const result = playRound(playerSelection, computerSelection); // Call playRound to get the result of this round
      console.log(result); // Display the result of the round
  
      // Update the score based on the round result
      if (result.includes("win")) { // If the result includes "win" (the player won)
        playerScore++; // Increment player's score
      } else if (result.includes("lose")) { // If the result includes "lose" (the player lost)
        computerScore++; // Increment computer's score
      }
    }
  
    // Display the final score and who won
    if (playerScore > computerScore) { // If the player has more points than the computer
      console.log(`You win the game! Final score: You - ${playerScore}, Computer - ${computerScore}`); 
      alert(`🎉 You win the game! 🎉 Final score: You - ${playerScore}, Computer - ${computerScore} 🏆`); 
    } else if (playerScore < computerScore) { 
      console.log(`You lose the game! Final score: You - ${playerScore}, Computer - ${computerScore}`); // Display player's loss message
      alert(`😭 You lose the game! 😭 Final score: You - ${playerScore}, Computer - ${computerScore} 💔`);
    } else { // If both the player and computer have the same score
      console.log(`It's a tie game! Final score: You - ${playerScore}, Computer - ${computerScore}`); // Display tie message
      alert(`🤝 It's a tie game! 🤝 Final score: You - ${playerScore}, Computer - ${computerScore} ⚖️`); // Alert  if it's a tie
    }
  }
  
  // Start the game
  game(); // Call the game function to start the game