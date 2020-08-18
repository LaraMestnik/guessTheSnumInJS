let userGuess = parseInt(document.querySelector('#user-guess').value);
let errorMsg = document.querySelector('#error');
let result = document.querySelector('#result');

let sNum = function createRandom() {
    let random = Math.floor(Math.random() * 100 + 1);
    return random;
}



function guessTheSecretNumber() {
    if (userGuess === sNum) {
        result.textContent = `Congratulations! You won. The secret number is ${sNum}`;
    }
    else if (userGuess < sNum) {
        result.textContent = 'Your guess is too small. Try something bigger';
    }
    else if (userGuess > sNum) {
        result.textContent = 'Your guess is too big. Try something smaller';
    }
    else if (userGuess === '') {
        errorMsg.textContent = 'Please enter a field';
    }
};




