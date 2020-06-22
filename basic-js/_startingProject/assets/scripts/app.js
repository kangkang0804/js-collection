const defaultResult = 0
let currentResult = defaultResult
/*
this is a multi
line comment
*/
// single line comment

//gets input from input field
function getUserNumberInput () {
  return parseInt(userInput.value)
}

//generates and writes calculation log
function createAndWriteLog (operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
  outputResult(currentResult, calcDescription) //from vendor file
}

function add () {
  const enteredNumber = getUserNumberInput()
  const initialResult = currentResult
  currentResult = currentResult + enteredNumber
  createAndWriteLog('+', initialResult, enteredNumber)
}

function subtract () {
  const enteredNumber = getUserNumberInput()
  const initialResult = currentResult
  currentResult = currentResult - enteredNumber
  createAndWriteLog('-', initialResult, enteredNumber)
}

function multiply () {
  const enteredNumber = getUserNumberInput()
  const initialResult = currentResult
  currentResult = currentResult * enteredNumber
  createAndWriteLog('*', initialResult, enteredNumber)
}

function divide () {
  const enteredNumber = getUserNumberInput()
  const initialResult = currentResult
  currentResult = currentResult / enteredNumber
  createAndWriteLog('/', initialResult, enteredNumber)
}

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)
