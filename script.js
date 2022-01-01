// Defining the UI Elements 
const button = document.getElementById('btn');
const div = document.getElementById('the-div');
const hint = document.getElementById('hint');
const guesses = document.getElementById('guessLeft')
const inputField = document.getElementById('input');

// Variables
let btnReset;
let guessLeft = 3;


let low = 1;
let high = 10;
let number = Math.floor(Math.random() * (high - low) + low);
// console.log(number);

// Event Listener
button.addEventListener('click', getResult);


// Functions
function getResult(){
    const input = Number(inputField.value);    
    
    if(input < 1 || input > 10){
        alert("The number should be 1-10!")
        inputField.value = '';
    }else{        
        guessLeft--;
        inputField.value = '';
        if(input === number){
            hint.innerHTML = 'Congratulation!You guessed the correct number!'
            startNewGame();
            // console.log('You won!');
        }else if(guessLeft === 0){
            hint.innerHTML = 'Game Over!'
            startNewGame();
        }else{
            if(input > number){
                hint.innerHTML = 'The Number is lesser!'
                // console.log('The number is lesser!');
            }else if(input < number){
                hint.innerHTML = 'The Number is greater!'
                // console.log('The number is greater!');  
            }
        }
    }
    guesses.innerHTML = `Guess Left: ${guessLeft}`
}

function startNewGame(){
    inputField.disabled = true;
    button.disabled = true;
    btnReset = document.createElement('button');
    btnReset.textContent = 'Start New Game'
    div.append(btnReset);
    btnReset.addEventListener('click', resetTheGame);
}

function resetTheGame(){
    guessLeft = 3;
    guesses.innerHTML = `Guess Left: ${guessLeft}`
    hint.innerHTML = '';
    
    btnReset.remove();
    
    inputField.disabled = false;
    button.disabled = false;
    number = Math.floor(Math.random() * (high - low) + low);
    //console.log('The Game Was Restarted!');
    //console.log(number);
}
