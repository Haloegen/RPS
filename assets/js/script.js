(function() {
    let playerScore = 0;
    let computerScore = 0;
    let choices = ["rock", "paper", "scissors", "lizard", "spock"]
    let playerImg = document.getElementById("player-select")
    let comImg = document.getElementById("computer-select")

    function computerPlay() {
            let randomIndex = Math.floor(Math.random() * choices.length);
            return choices[randomIndex];
          }
    

    function playRound(playerSelection, computerSelection) {
      let player = playerSelection;
      let computer = computerSelection;

      if (player === computer) {
        playerImg.src = `assets/images/${player}.png`;
        comImg.src = `assets/images/${computer}.png`;
        return "It's a tie!";
      }

      if (
        (player === "rock" && (computer === "scissors" || computer === "lizard")) ||
        (player === "paper" && (computer === "rock" || computer === "spock")) ||
        (player === "scissors" && (computer === "paper" || computer === "lizard")) ||
        (player === "lizard" && (computer === "paper" || computer === "spock")) ||
        (player === "spock" && (computer === "rock" || computer === "scissors"))
      ) {
        playerScore++;
        playerImg.src = `assets/images/${player}.png`;
        comImg.src = `assets/images/${computer}.png`;
        return `You win! ${player} beats ${computer}.`;
      }

      computerScore++;
      playerImg.src = `assets/images/${player}.png`;
      comImg.src = `assets/images/${computer}.png`;
      return `You lose! ${computer} beats ${player}.`;
    }

    function handleClick(event) {
      let playerSelection = event.target.id;
      let computerSelection = computerPlay();
      let result = playRound(playerSelection, computerSelection);
      displayResult(playerSelection, computerSelection, result);
      updateScore();
    }

    function displayResult(playerMove, computerMove, result) {
       let playerMoveElement = document.getElementById("player-move");
      let computerMoveElement = document.getElementById("computer-move");
      let resultElement = document.getElementById("result");
      
      playerMoveElement.textContent = playerMove;
      computerMoveElement.textContent = computerMove;
      resultElement.textContent = result;
    }

    function updateScore() {
      let playerScoreElement = document.getElementById("player-score");
      let computerScoreElement = document.getElementById("computer-score");

      playerScoreElement.textContent = playerScore;
      computerScoreElement.textContent = computerScore;
    }

    let buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
      button.addEventListener("click", handleClick);
    });
  })();