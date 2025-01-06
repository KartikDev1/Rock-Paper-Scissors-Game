const btns = document.querySelectorAll('.playerChoice .btns');
const plychoice = document.getElementById('pChoice');
const compChoice = document.getElementById('CChoice');
const resultDisplay = document.getElementById('result');
const choices = ["rock","paper","scissors"];

const plyScore = document.getElementById('plyScore');
let pScore = 0;

const compScore = document.getElementById('compScore');
let cScore = 0;

btns.forEach(choice =>{
    choice.addEventListener("click",() =>{
        const value = choice.value || choice.id;
        plychoice.textContent = `Player : ${value}`;

        const compValue = choices[Math.floor(Math.random()*3)];
        compChoice.textContent = `Computer : ${compValue}`;

        const result = getResult(value,compValue);
        resultDisplay.textContent = `${result}`

        if(result === "You win! 🎉"){

            resultDisplay.style.color = "Green";
            
            pScore++;

            plyScore.textContent = `Player Score : ${pScore}`
        }
        else if(result === "Computer wins! 😢"){
            resultDisplay.style.color = "Red";
            cScore++;

            compScore.textContent = `Computer Score : ${cScore}`
        }
        else{
            resultDisplay.style.color = "Blue";
        }

    });
});


function getResult(player,computer){
    if(player === computer){
        return `Draw!`;
    }

    if (
        (player === "rock" && computer === "scissors") ||
        (player === "scissors" && computer === "paper") ||
        (player === "paper" && computer === "rock")
    ) {
        return "You win! 🎉";
    }
    return "Computer wins! 😢";
}