"use strict";

const numbersList = document.getElementById("numbers-list");
const countdown = document.getElementById("countdown");
const instructions = document.getElementById("instructions");
const message = document.getElementById("message");

const numbersGuess = [];
const numbersUser = [];

function generaNumeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mostraNumeroRandom() {
    let duration = 6000;  
    
    const interval = setInterval(function () {
        const randomNum = generaNumeroRandom(1, 100);
        numbersList.innerText = randomNum;  
    }, 1000); 

    setTimeout(function () {
        clearInterval(interval);  
        numbersList.innerText = ''; 
        showCountdown(duration); 
    }, duration);
}

function showCountdown(duration) {
    let timeLeft = duration / 100;  
    countdown.innerText = timeLeft;  

    const countdownInterval = setInterval(function () {
        timeLeft--;
        countdown.innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            chiediNumeriUtente(); 
        }
    }, 1000);
}

function chiediNumeriUtente() {
    instructions.innerText= "Inserisci i numeri che ricordi!";
    const inputs = document.querySelectorAll("input");
    for (let i = 0; i < inputs.length; i++) {
        numbersUser.push(inputs[i].value); 
    }

    verificaRisultati(); 
}

function verificaRisultati() {
    if (numbersUser.length === numbersGuess.length) {
        let correctGuesses = 0;
        for (let i = 0; i < numbersUser.length; i++) {
            if (numbersUser[i] === numbersGuess[i]) {
                correctGuesses++;
            }
        }
        message.innerText = `${correctGuesses} su ${numbersGuess.length} numeri indovinati!`;
    } else {
        message.innerText = "Non hai inserito i numeri giusti!";
    }
}

    for (let i = 0; i < 5; i++) {
        const num = generaNumeroRandom(1, 100);
        numbersGuess.push(num); 
    }

    mostraNumeroRandom();

