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

function playRound(playerSelection, computerSelection){
    if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSOR"){
        return "You win! Rock beats Scissor.";
    }
    else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER"){
        return "You lose! Paper beats Rock.";
    }
    else if(playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "ROCK"){
        return "It's a draw! You both picked Rock."
    }
    else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSOR"){
        return "You lose! Scissor beats Paper.";
    }
    else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "PAPER"){
        return "It's a draw! You both picked Paper.";
    }
    else if(playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK"){
        return "You win! Paper beats Rock."
    }
    else if (playerSelection.toUpperCase() === "SCISSOR" && computerSelection.toUpperCase() === "SCISSOR"){
        return "It's a draw! You both picked Scissor.";
    }
    else if (playerSelection.toUpperCase() === "SCISSOR" && computerSelection.toUpperCase() === "PAPER"){
        return "You win! Scissor beats Paper.";
    }
    else if(playerSelection.toUpperCase() === "SCISSOR" && computerSelection.toUpperCase() === "ROCK"){
        return "You lose! Rock beats Scissor";
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

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


