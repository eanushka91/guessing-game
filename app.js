
const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber); 

let guessCount = 0;
const totalChances = 3;
let chancesLeft = totalChances;

function checkGuess() {
    if (chancesLeft === 0) {
      return;
    }
  
  const userGuess = Number(document.getElementById('guessField').value);

  const message = document.getElementById('message');
  if (userGuess === randomNumber) {
    message.textContent = `Congratulations! You guessed the number correctly 🎉.`;
    message.style.color = 'green';
    
  } else if (userGuess < randomNumber) {
    message.textContent = 'Too low! Try guessing a higher number 🤔.';
    message.style.color = 'red';
  } else {
    message.textContent = 'Too high! Try guessing a lower number 🥸.';
    message.style.color = 'red';
  }


  chancesLeft--;
  document.getElementById('chancesLeft').textContent = chancesLeft;


  if (chancesLeft === 0) {
    message.textContent = `Game over 🥴! The correct number was ${randomNumber}.`;

  }

 
  document.getElementById('guessField').value = '';
  document.getElementById('guessField').focus();
}
