let playerScore = 0;
let cpuScore = 0;
const userScoreSpan = document.getElementById("player-board");
const cpuScoreSpan = document.getElementById("cpu-board");
const scoreBoardDiv = document.querySelector(".score-board");
const resultDiv = document.querySelector(".result")
const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorsDiv = document.getElementById("scissors");
const newGameDiv = document.querySelector(".newGame");
let gameOn = true;

let playerName = prompt("Welcome to Rock Paper Scissors! What is your name?");

if (playerName !== null) {
    document.getElementById('player-name').innerHTML = playerName;
}


function letterToWord(letter) {
    if (letter === 'r') return 'Rock';
    if (letter === 'p') return 'Paper';
    if (letter === 's') return 'Scissors';
}

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    playerScore++;
    userScoreSpan.innerHTML = playerScore;
    cpuScoreSpan.innerHTML = cpuScore;
    resultDiv.innerHTML = `${letterToWord(userChoice)} beats ${letterToWord(computerChoice)}, you win!`;
    document.getElementById("player-board").classList.add('win-flash');
    setTimeout(function() {document.getElementById('player-board').classList.remove('win-flash')}, 500);
}

function lose(userChoice, computerChoice) {
    cpuScore++;
    userScoreSpan.innerHTML = playerScore;
    cpuScoreSpan.innerHTML = cpuScore;
    resultDiv.innerHTML = `${letterToWord(computerChoice)} beats ${letterToWord(userChoice)}, you lose.`
    document.getElementById("cpu-board").classList.add('lose-flash');
    setTimeout(function() {document.getElementById('cpu-board').classList.remove('lose-flash')}, 500);
}

function draw(userChoice, computerChoice) {
    userScoreSpan.innerHTML = playerScore;
    cpuScoreSpan.innerHTML = cpuScore;
    resultDiv.innerHTML = `${letterToWord(computerChoice)} = ${letterToWord(userChoice)}, it's a draw.`
    document.querySelector(".scoreboardContainer").classList.add('draw-flash');
    setTimeout(function() {document.querySelector('.scoreboardContainer').classList.remove('draw-flash')}, 500);
}




function game(userChoice) {

    if (playerScore === 10) {
        gameOn = false;
        document.querySelector(".result").innerHTML = `${playerName} wins!`
    } else if (cpuScore === 10) {
        gameOn = false;
        document.querySelector(".result").innerHTML = `${playerName} loses. Try again`
    }   else {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
    }
    

}


function newGame() {

    newGameDiv.addEventListener('click', function() {
        
    })

}

    // function gameOver(gameOn) {
    //     if (gameOn) {main()} else {
  
    //     }
    // }

function main() {

  
            


            rockDiv.addEventListener('click', function() {
                game("r");
            })
            
            paperDiv.addEventListener('click', function() {
                game("p");
            })
            
            scissorsDiv.addEventListener('click', function() {
                game("s");
                })
        }
    
// while (gameOn) {
//     main();
// }
    // if (playerScore === 10) {
    //     document.querySelector(".result").innerHTML = `${playerName} wins the game!`
    //     return;
    // } else if (cpuScore === 10) {
    //     document.querySelector(".result").innerHTML = `${playerName} loses. Please try again.`
    //     return;
    // } else {

// rockDiv.addEventListener('click', function() {
//     game("r");
// })

// paperDiv.addEventListener('click', function() {
//     game("p");
// })

// scissorsDiv.addEventListener('click', function() {
//     game("s");
//     })
// }


main();