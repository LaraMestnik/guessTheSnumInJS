const errorMsg = document.querySelector('#error');
const button = document.querySelector('#btn');
const result = document.querySelector('#result');


const sNum = Math.floor(Math.random() * 100) + 1;

button.addEventListener('click', guessTheSecretNumber);


function guessTheSecretNumber(e) {
    e.preventDefault();

    const userGuess = parseInt(document.querySelector('#user-guess').value);

    if (userGuess === sNum) {
        result.textContent = `Congratulations! You guessed it! The secret number is ${sNum}`;
        result.className = 'text-success mt-5 text-uppercase font-weight-bold';
    }
    else if (userGuess < sNum) {
        result.textContent = 'Your guess is too small. Try something bigger';
    }
    else if (userGuess > sNum) {
        result.textContent = 'Your guess is too big. Try something smaller';
    }
    else if (userGuess === "") {
        result.textContent = 'Please enter a field';
    }
};




