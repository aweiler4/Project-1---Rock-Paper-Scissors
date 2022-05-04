let playerScore = 0;
let cpuScore = 0;
const userScoreSpan = document.getElementById("player-board");
const cpuScoreSpan = document.getElementById("cpu-board");
const scoreBoardDiv = document.querySelector(".score-board");
const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorsDiv = document.getElementById("scissors");



function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win() {
    playerScore++;
    userScoreSpan.innerHTML = playerScore;
    cpuScoreSpan.innerHTML = cpuScore;
}

function lose() {
    
}

function draw() {
    
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win();
            break;
        case "rp":
        case "ps":
        case "sr":
            lose();
            break;
        case "rr":
        case "pp":
        case "ss":
            draw();
            break;
    }
    

}

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

main();