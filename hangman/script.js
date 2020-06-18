const wordEl = document.getElementById('word')
const wrongLettersEl = document.getElementById('wrong-letters')
const playAgainBtn = document.getElementById('play-button')
const popup = document.getElementById('popup-container')
const notification = document.getElementById('notification-container')
const finalMessage = document.getElementById('final-message')

const figureParts = document.querySelectorAll('.figure-part')

const words = ['developer', 'programming', 'javascript', 'wizard']

let selectedWord = words[Math.floor(Math.random() * words.length)]

const correctLetters = ['w', 'i', 'z', 'a', 'r', 'd']
const wrongLetters = []

//show hidden word
function displayWord () {
  wordEl.innerHTML = `
    ${selectedWord
      .split('')
      .map(
        letter => `
      <span class='letter'>
        ${correctLetters.includes(letter) ? letter : ''}
      </span>
    `
      )
      .join('')}
  `
  // console.log(wordEl.innerText)
  const innerWord = wordEl.innerText.replace(/\n/g, '')
  // console.log(innerWord)

  if (innerWord === selectedWord) {
    finalMessage.innerText = 'Congratulations! You win!'
    popup.style.display = 'flex'
  }
}

//update the wrong letters
function updateWrongLettersEl () {
  //display wrong letters
  wrongLettersEl.innerHTML = `
  ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
  ${wrongLetters.map(letter => `<span>${letter}</span>`)}
 `

  //display parts
  figureParts.forEach((part, index) => {
    const errors = wrongLetters.length
    if (index < errors) {
      part.style.display = 'block'
    } else {
      part.style.display = 'none'
    }

    //check if lost
    if (wrongLetters.length === figureParts.length) {
      finalMessage.innerText = 'Unfortunately, you lost :('
      popup.style.display = 'flex'
    }
  })
}

//show notification
function showNotification () {
  notification.classList.add('show')
  setTimeout(() => {
    notification.classList.remove('show')
  }, 2500)
}

// keydown letter press
window.addEventListener('keydown', e => {
  // console.log(e.keyCode)
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    // console.log(e.key)
    const letter = e.key
    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter)
        displayWord()
      } else {
        showNotification()
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter)
        updateWrongLettersEl()
      } else {
        showNotification()
      }
    }
  }
})

// restart game and play again
playAgainBtn.addEventListener('click', () => {
  // empty the correct and wrong arrays
  correctLetters.splice(0)
  wrongLetters.splice(0)

  selectedWord = words[Math.floor(Math.random() * words.length)]

  displayWord()

  updateWrongLettersEl()

  popup.style.display = 'none'
})

displayWord()
