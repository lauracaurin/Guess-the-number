"use strict";

const userNumberInput = document.querySelector('.js__user_number_input');
const btn = document.querySelector('.js__button');
const btnReset = document.querySelector('.js__button_reset');
const clueParagraph = document.querySelector('.js__clue_paragraph');
const counterTries = document.querySelector('.js__counter_tries');
let randomNumber = getRandomNumber(100);
let counter = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

console.log('Mi número aleatorio es: ' + randomNumber);

function attemptsCounter() {
  counter++
  counterTries.innerHTML = counter;
}

function writeClueText(msj) {
  clueParagraph.innerHTML = msj;
}

function compareNumber() {
  const userNumber = parseInt(userNumberInput.value);

  if (isNaN(userNumber)) {
    writeClueText('Debe introducir un numero');
  } else if (userNumber > randomNumber && userNumber <= 100) {
    writeClueText('El número es demasiado alto');
  } else if (userNumber < randomNumber && userNumber >= 1) {
    writeClueText('El número es demasiado bajo');
  } else if (userNumber === randomNumber) {
    writeClueText('!!Has ganado campeona!!');
  } else {
    writeClueText('El número debe estar entre 1 y 100');
  }
};

function handleClickButton(event) {
  event.preventDefault();
  compareNumber();
  attemptsCounter();
}

function handleClickButtonReset(event) {
  event.preventDefault();
}

btn.addEventListener('click', handleClickButton);
btnReset.addEventListener('submit', handleClickButtonReset);
