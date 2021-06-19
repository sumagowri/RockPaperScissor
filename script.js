'use strict';

const computerScore = document.getElementById('computer-score');
const userScore = document.getElementById('user-score');

let cScore = 0;
let pScore = 0;
let resultMessage = '';

const gameStartContainer = document.getElementById('game-start');
const gameResultContainer = document.querySelector('.game-result');

const hands = document.querySelector('.hands');

const btnGameStart = document.getElementById('btn-game-start');

const computerChoice = document.getElementById('computer-choice');
const userChoice =document.getElementById('user-choice');
const result = document.getElementById('result');

// const btngamerestart = document.getElementById('btn-game-restart');
// const main = document.getElementById('main');
// const restart = document.getElementById('afterres');
// const aftermes = document.getElementById('afterresp');

// functions

//Game Start function
const gameStart = function(){
    computerScore.innerText = cScore;
    userScore.innerText = pScore;
    gameStartContainer.classList.add('hidden');
}

const updateDom = function(userSelected,computerSelected,resultMessage){
    computerScore.innerText =cScore;
    userScore.innerText = pScore;
    computerChoice.innerHTML = `Computer Choose <strong>${computerSelected.toUpperCase()}</strong>`;
    userChoice.innerHTML = `User Choose <strong>${userSelected.toUpperCase()}</strong>`;
    result.innerText = resultMessage;
    gameResultContainer.classList.remove('hidden');
    // if(pScore>=10){
    //     restart.classList.remove('hidden');
    //     aftermes.innerText = 'CONGRATS YOU WON';
    //     document.body.innerHTML = '<div style="opacity = 0.3"></div>'
    // }else if(cScore>=10){
    //     restart.classList.remove('hidden');
    //     aftermes.innerText = 'YOU LOST!! TRY AGAIN!!';
    // }

}

const gameLogic = function(userSelected,computerSelected){
    if ( userSelected === computerSelected) {
        resultMessage ='DRAW';
        updateDom(userSelected,computerSelected,resultMessage);
        return;
    }
    if(userSelected ==='rock'){
        if(computerSelected === 'paper'){
            resultMessage ='YOU LOSE';
            cScore++;
            updateDom(userSelected,computerSelected,resultMessage);
            return;
        }
        else{
            resultMessage ='YOU WON';
            pScore++;
            updateDom(userSelected,computerSelected,resultMessage);
            return;
        }
    }
    if(userSelected ==='paper'){
        if(computerSelected === 'rock'){
            resultMessage ='YOU WON';
            pScore++;
            updateDom(userSelected,computerSelected,resultMessage);
            return;
        }
        else{
            resultMessage ='YOU LOSE';
            cScore++;
            updateDom(userSelected,computerSelected,resultMessage);
            return;
        }
    }
    if(userSelected ==='scissors'){
        if(computerSelected === 'paper'){
            resultMessage ='YOU WON';
            pScore++;
            updateDom(userSelected,computerSelected,resultMessage);
            return;
        }
        else{
            resultMessage ='YOU LOSE';
            cScore++;
            updateDom(userSelected,computerSelected,resultMessage);
            return;
        }
    }

}



const check=function(input){
    const userSelected = input;
    const choices = ['rock','paper','scissors'];
    const num =Math.trunc(Math.random()*3);

    const computerSelected = choices[num];

    gameLogic(userSelected,computerSelected);
}

//Eventlisteners

btnGameStart.addEventListener('click',gameStart);

//calling functions
