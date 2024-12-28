let randomNum = Math.floor(Math.random() * 101);
let startGame = () => {
    let userInput = +document.querySelector("#user_input").value;
    let result = document.querySelector("#result");
    

    if (randomNum === userInput) {
        result.innerHTML = "You Guessed Right!";
        result.style.color = 'green';
        
    }
    else if (randomNum < userInput) {
        result.innerHTML = `The Number is less than ${userInput}`;
        result.style.color = 'red';
    }
    else if (randomNum > userInput) {
        result.innerHTML = `The Number is greater than ${userInput}`;
        result.style.color = 'red';
    }
    else {
        result.innerHTML = "You didn't input a number";
        result.style.color = 'red';
    }
}

let reload = () => {
    location.reload();
}