let guessNumber = Math.round(Math.random() * 100)
console.log(guessNumber);



let attempts = 10;
let guessesArr = [];
let foundAnswer = false;

const lowOrHigh = document.querySelector('.lowOrHi')





document.querySelector('#subt').addEventListener('click' , (event) =>{
    
    if(attempts> 0){

         event.preventDefault();
        const guessInString = document.querySelector('#guessField').value;
        const guess = Number(guessInString)

        //Null condition
        if (isNaN(guess) || guess === "") {
            lowOrHigh.innerHTML = "Please enter a valid number!";
            return;
        }

        if (guess === guessNumber){
            foundAnswer = true
            lowOrHigh.innerHTML = `Congratulations !! Your Guess was right !!`
            return;
        }else if(guess > guessNumber){
            lowOrHigh.innerHTML = `Too High !!`
        }else{
            lowOrHigh.innerHTML = `Too Low !!`
        }
        
        guessesArr.push(guess);
        
        attempts--;

        document.querySelector('.guesses').innerHTML = `${guessesArr}`
        document.querySelector('.lastResult').innerHTML = `${attempts}`

        
    }
    else{
        lowOrHigh.innerHTML = 'Game Over'
    }

})




