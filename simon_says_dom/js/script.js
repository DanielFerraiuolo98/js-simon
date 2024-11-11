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
        numbersList.textContent = randomNum;  
    }, 1000); 

    setTimeout(function () {
        clearInterval(interval);  
        numbersList.textContent = ''; 
        showCountdown(duration); 
    }, duration);
}



