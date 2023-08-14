function getComputerChoice()
{
    let choice = Math.floor(Math.random()*3) + 1;

    switch (choice){
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissor";
            break;
    }
}   

let result = document.querySelector(".store")

let pwin = 0;
let cwin = 0;
let player = document.querySelector(".player");
let computer = document.querySelector(".computer")
let winner = document.querySelector(".winner");
let over = 0;


function playRound(playerSelection, computerSelection){
    if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSOR"){
        result.innerText = "You win! Rock beats Scissor.";
        pwin ++;
        player.innerText = "Player score: "+pwin;
        computer.innerText = "Computer score: "+cwin;
    }
    else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER"){
        result.innerText = "You lose! Paper beats Rock.";
        cwin ++;
        player.innerText = "Player score: "+pwin;
        computer.innerText = "Computer score: "+cwin;
    }
    else if(playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "ROCK"){
        result.innerText = "It's a draw! You both picked Rock."
    }
    else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSOR"){
        result.innerText = "You lose! Scissor beats Paper.";
        cwin ++;
        player.innerText = "Player score: "+pwin;
        computer.innerText = "Computer score: "+cwin;
    }
    else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "PAPER"){
        result.innerText = "It's a draw! You both picked Paper.";
    }
    else if(playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK"){
        result.innerText = "You win! Paper beats Rock."
        pwin ++;
        player.innerText = "Player score: "+pwin;
        computer.innerText = "Computer score: "+cwin;
    }
    else if (playerSelection.toUpperCase() === "SCISSOR" && computerSelection.toUpperCase() === "SCISSOR"){
        result.innerText = "It's a draw! You both picked Scissor.";
    }
    else if (playerSelection.toUpperCase() === "SCISSOR" && computerSelection.toUpperCase() === "PAPER"){
        result.innerText = "You win! Scissor beats Paper.";
        pwin ++;
        player.innerText = "Player score: "+pwin;
        computer.innerText = "Computer score: "+cwin;
    }
    else if(playerSelection.toUpperCase() === "SCISSOR" && computerSelection.toUpperCase() === "ROCK"){
        result.innerText = "You lose! Rock beats Scissor";
        cwin ++;
        player.innerText = "Player score: "+pwin;
        computer.innerText = "Computer score: "+cwin;
    } 


if (over === 0){
    if (pwin === 5){
        winner.innerText = "Congrats! You reached 5 points first!";
        over ++;
    }
    else if(cwin === 5){
        winner.innerText = "Pathetic! You lost! The computer reached five points first!"
        over ++;
    }
}

}


/*
function game(){
    let win = 0; 
    let lose =0;
    for(let i=0; i<5; i++){
        let player = prompt("What's your choice Rock, Paper, or Scissor?")
        let computer = getComputerChoice();
        let result = playRound(player, computer);
        console.log(result);
        if (result.substring(0,8)==="You lose"){
            lose++;
        }
        else if (result.substring(0,7)==="You win"){
            win++;
        }
    }
    if( win>lose){
        return "Congrats! You won overall by wining "+win+" game(s) and losing only "+lose+" game(s).";
    }
    else if (win==lose){
        return "Oh no! It was a draw! You won "+ win +" game(s), but lost "+ lose+" game(s)."; 
    }
    else{
        return"Pathetic! You lost! You won "+ win + " game(s), but lost "+lose+" game(s).";
    }
}
*/

let rbtn = document.querySelector(".rock");
let pbtn = document.querySelector(".paper");
let sbtn = document.querySelector(".scissor");

if(rbtn){
rbtn.addEventListener("click", () => {playRound("rock", getComputerChoice())});
}
if (pbtn){
pbtn.addEventListener("click", () => {playRound("paper", getComputerChoice())});
}
if (sbtn){
sbtn.addEventListener("click", () => {playRound("scissor", getComputerChoice())});
}
