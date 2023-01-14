function getRandom() {
    return Math.floor((Math.random() * 6) + 1);
}

let randomNumber1 = getRandom();
document.querySelector('.img1').setAttribute('src', 'images/dice' + randomNumber1 + '.png');

let randomNumber2 = getRandom();
document.querySelector('.img2').setAttribute('src', 'images/dice' + randomNumber2 + '.png');

let bigTitle = document.querySelector('h1');
if (randomNumber1 > randomNumber2) {
    bigTitle.textContent = 'Player 1 Wins!';
} else if (randomNumber1 < randomNumber2) {
    bigTitle.textContent = 'Player 2 Wins!'
} else {
    bigTitle.textContent = 'Draw!';
}