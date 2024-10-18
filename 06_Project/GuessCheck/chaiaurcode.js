let randomNum = parseInt(Math.random() * 100 + 1);
let form = document.querySelector("form");
let userInput = document.querySelector("#guessField");
let submit = document.querySelector("#subt");
let banner = document.querySelector(".guesses");
let life = document.querySelector(".lastResult");
let message = document.querySelector(".lowOrHi");
let restart = document.querySelector(".resultParas")

const p = document.createElement("p");

let preValues = [];
let leftLife = 0;

let startGame = true;

if (startGame){
submit.addEventListener("click", ((e) => {
  e.preventDefault()

  const guess = parseInt(userInput.value)
  validateGuess(guess)
}))
};


const validateGuess = (guess) => {
if (isNaN(guess)) {
alert(`Enter a valid number`);
} else if (guess > 100) {
  alert(`Enter a number lesser than 100`)
} else if (guess < 1) {
  alert(`Enter a number greater than 1`)
} else {
  preValues.push(guess);
  if (leftLife === 10) {
    displayMesssgae(`Game Over last guess was ${randomNum}`);
    clearNext(guess);
    endGame();
  } else {
    checkGuess(guess);
    clearNext(guess);
  }
}
};

const checkGuess = (guess) => {
if (guess === randomNum) {
  displayMesssgae(`Congratulation you guessed it right, Your number was ${guess}`);
  endGame();
} else if (guess > randomNum) {
  displayMesssgae(`oww... Guess was Too high`)
} else if (guess < randomNum) {
  displayMesssgae(`oww... Guess was Too low`)
};
};


const clearNext = (guess) => {
  userInput.value = '';
  banner.innerHTML += `${guess} ,`;
  leftLife++
  life.innerHTML = 10 - leftLife;
}

const displayMesssgae = (message) => {
  message.innerHTML = `<h2>${message}</h2>`
};

const endGame = () => {
  userInput.value = '';
  leftLife = 0;
  submit.setAttribute("disabled", '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newStart">Start New Game </h2>`;
  restart.appendChild(p);
  startGame = false
  newGame()
}

const newGame = () => { 
  const newGameButton = document.querySelector('#newStart');
  newGameButton.addEventListener('click', ( (e) => {
    randomNum = parseInt(Math.random() * 100 + 1);
    preValues = [];
    leftLife = 0;
    banner.innerHTML = '';
    life.innerHTML  = `${10 - leftLife}`;
    submit.removeAttribute('disabled');
    restart.removeChild(p);

    startGame = true
  })) 
}