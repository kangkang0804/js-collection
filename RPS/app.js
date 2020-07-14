const startGameBtn = document.getElementById('start-game-btn')

const ROCK = 'ROCK'
const PAPER = 'PAPER'
const SCISSORS = 'SCISSORS'
const DEFAULT_USER_CHOICE = ROCK
const RESULT_DRAW = 'DRAW'
const RESULT_PLAYER_WINS = 'YOU WIN!'
const RESULT_COMPUTER_WINS = 'COMPUTER WINS'

let gameIsRunning = false

const getPlayerChoice = function () {
  const selection = prompt(
    `${ROCK}, ${PAPER}, or ${SCISSORS}?`,
    ''
  ).toUpperCase()

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${ROCK} for you!`)
    return DEFAULT_USER_CHOICE
  }

  return selection
}

const getComputerChoice = function () {
  const randomValue = Math.random()
  if (randomValue < .34) {
    return ROCK
  } else if (randomValue < .67) {
    return PAPER
  } else {
    return SCISSORS
  }
}

const getWinner = function (computerChoice, playerChoice) {
  if (computerChoice === playerChoice) {
    gameIsRunning = false
    return RESULT_DRAW
  } else if (
    (computerChoice === ROCK && playerChoice === PAPER) ||
    (computerChoice === PAPER && playerChoice === SCISSORS) ||
    (computerChoice === SCISSORS && playerChoice === ROCK)
  ) {
    gameIsRunning = false
    return RESULT_PLAYER_WINS
  } else {
    gameIsRunning = false
    return RESULT_COMPUTER_WINS
  }
}

startGameBtn.addEventListener('click', function () {
  console.log('game is starting')
  if (gameIsRunning) {
    return
  }
  const playerSelection = getPlayerChoice()
  const computerChoice = getComputerChoice()
  const winner = getWinner(computerChoice, playerSelection)
  console.log(winner)
})
