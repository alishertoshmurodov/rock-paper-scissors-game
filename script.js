const bodyEl = document.querySelector('body');
const rulesBtnEl = document.querySelector('.game__rules-button');

const rulesWindow = document.createElement('div');

const rulesImg = document.createElement('img');
rulesImg.src = '/images/image-rules.svg';
const rulesAction = document.createElement('div');
rulesAction.setAttribute('class', 'game__rules-action');
const rulesHeader = document.createElement('p');
rulesHeader.textContent = 'RULES';
rulesHeader.setAttribute('class', 'game__rules-header')
const rulesCloseBtn = document.createElement('p');
const CloseBtnIcon = document.createElement('i');
rulesWindow.setAttribute('class', '');
CloseBtnIcon.setAttribute('class', 'fa-solid fa-xmark');
rulesCloseBtn.appendChild(CloseBtnIcon);
rulesAction.appendChild(rulesHeader);
rulesAction.appendChild(rulesCloseBtn);
rulesWindow.appendChild(rulesAction);
rulesWindow.appendChild(rulesImg);

const playAgainBtn = document.querySelector('.play-again-btn');
const resultEl = document.querySelector('.result');

let scoreCounterEl = document.querySelector('.header__score-counter');
scoreCounterEl.textContent = 0;

rulesBtnEl.addEventListener('click', function (e) {
    bodyEl.appendChild(rulesWindow);
    rulesWindow.classList.add('game__rules-window', 'scale-in-center');
    rulesWindow.classList.remove('scale-out-center');
});

rulesCloseBtn.addEventListener('click', function (e) {
    rulesWindow.classList.remove('scale-in-center');
    rulesWindow.classList.add('scale-out-center');
});

// player's pick
const triangleEl = document.querySelector('.triangle');
const pickEls = document.querySelectorAll('.pick');
const pickedEls = document.querySelectorAll('.picks img');
const gameContainerEl = document.querySelector('.game__container');
const pickedContainer = document.querySelector('.picked');
let playersPick = '';
let housePick = '';

pickEls.forEach(element => {
    element.addEventListener('click', function (e) {
        if (element.classList.contains('pick_paper')) {
            pickedEls[0].src = "/images/icon-paper.svg";
            pickedEls[0].parentElement.classList.add('pick-inset-shadow', 'picks-paper');
            playersPick = 'paper';
        } else if (element.classList.contains('pick_rock')) {
            pickedEls[0].src = "/images/icon-rock.svg";
            pickedEls[0].parentElement.classList.add('pick-inset-shadow', 'picks-rock');
            playersPick = 'rock';
        } else {
            pickedEls[0].src = "/images/icon-scissors.svg";
            pickedEls[0].parentElement.classList.add('pick-inset-shadow', 'picks-scissors');
            playersPick = 'scissors';
        }
        gameContainerEl.style = 'display: none';
        pickedContainer.style = 'display: grid';
        pickedContainer.classList.add('scale-in-top');

        const randomNum = Math.floor(Math.random() * 3);

        if (randomNum === 0) {
            pickedEls[1].src = "/images/icon-paper.svg";
            pickedEls[1].parentElement.classList.add('pick-inset-shadow', 'picks-paper');
            housePick = 'paper';
        } else if (randomNum === 1) {
            pickedEls[1].src = "/images/icon-rock.svg";
            pickedEls[1].parentElement.classList.add('pick-inset-shadow', 'picks-rock');
            housePick = 'rock';
        } else {
            pickedEls[1].src = "/images/icon-scissors.svg";
            pickedEls[1].parentElement.classList.add('pick-inset-shadow', 'picks-scissors');
            housePick = 'scissors';
        }

        
        const result = resultEl.querySelector('p');

        playAgainBtn.textContent = 'PLAY AGAIN';
        resultEl.style = 'display: block';

        if (playersPick === housePick) {
            result.textContent = 'DRAW';
        } else if (playersPick === 'paper') {
            if (housePick === 'rock') {
                result.textContent = 'YOU WIN';
            } else {
                result.textContent = 'YOU LOSE';
            }
        } else if (playersPick === 'rock') {
            if (housePick === 'scissors') {
                result.textContent = 'YOU WIN';
            } else {
                result.textContent = 'YOU LOSE';
            }
        } else {
            if (housePick === 'paper') {
                result.textContent = 'YOU WIN';
            } else {
                result.textContent = 'YOU LOSE';
            }
        }

        if (result.textContent === 'YOU WIN') {
            scoreCounterEl.textContent = Number(scoreCounterEl.textContent) + 1;
        }
    });
});

const picks = document.querySelectorAll('.picks');
picks[0].parentElement.style = 'transform: translateX(-100px); transition-duration: 0.5s';
picks[1].parentElement.style = 'transform: translateX(100px); transition-duration: 0.5s';

playAgainBtn.addEventListener('click', function (e) {
    gameContainerEl.style = 'display: grid';
    pickedContainer.style = 'display: none';
    resultEl.style = 'display: none';
    const picksClass = document.querySelectorAll('.picks');
    for (let i = 0; i < picksClass.length; i++) {
        picksClass[i].classList.remove('picks-paper', 'picks-rock', 'picks-scissors');
    }
});











