
function computerPlay(){

    let weapons = ["rock","paper","scissors"];
    var computerWep = weapons[Math.floor(Math.random()* weapons.length)]

    return computerWep;
}
function getPlayerSelection(input){
    input = prompt("Choose your weapon (rock, paper or scissors)");
    return input;
}

function playRound(){

    playerSelection = getPlayerSelection();
    
    computerWep = computerPlay();
 
    var playerWep = playerSelection.toLowerCase();
    
    if(playerWep === "rock" && computerWep=== "scissors"){
            let result = "win";
            return result;
    }
    else if(playerWep === "scissors" && computerWep=== "rock"){
        let result = "loss";
        return result;
    }
    else if(playerWep === "paper" && computerWep=== "scissors"){
            let result = "loss";
            return result;
    }
    else if(playerWep === "scissors" && computerWep=== "paper"){
            let result = "win";
            return result;
    }
    else if(playerWep === "rock" && computerWep=== "paper"){
            let result = "loss";
            return result;
    }
    else if(playerWep === "paper" && computerWep=== "rock"){ 
            let result = "win";
            return result;
    }
    else if(playerWep === "paper" && computerWep=== "paper"){ 
        let result = "tie";
        return result;
}
else if(playerWep === "rock" && computerWep=== "rock"){ 
    let result = "tie";
    return result;
}
else if(playerWep === "scissors" && computerWep=== "scissors"){ 
    let result = "tie";
    return result;
}
 
}


function game(){
    let playerCounter = 0;
    let computerCounter = 0;

    
    let result = playRound();
    if(result === "win"){
        console.log("You WIN!");
        playerCounter++;
    }
    else if(result === "loss"){
        console.log("You LOSE!");
        computerCounter++;
    }
    else if(result === "tie"){
        console.log("It's a TIE!");
    }
    else{
        console.log("Check for grammar mistakes");
    }
    
     result = playRound();
    if(result ==="win"){
        console.log("You WIN!");
        playerCounter++;
    }
    else if(result ==="loss"){
        console.log("You LOSE!");
        computerCounter++;
    }
    else if(result ==="tie"){
        console.log("It's a TIE!");
    }
    else{
        console.log("Check for grammar mistakes");
    }
    
    result = playRound();
    if(result ==="win"){
        console.log("You WIN!");
        playerCounter++;
    }
    else if(result ==="loss"){
        console.log("You LOSE!");
        computerCounter++;
    }
    else if(result ==="tie"){
        console.log("It's a TIE!");
    }
    else{
        console.log("Check for grammar mistakes");
    }
    
    result = playRound();
    if(result ==="win"){
        console.log("You WIN!");
        playerCounter++;
    }
    else if(result ==="loss"){
        console.log("You LOSE!");
        computerCounter++;
    }
    else if(result ==="tie"){
        console.log("It's a TIE!");
    }
    else{
        console.log("Check for grammar mistakes");
    }
    result = playRound();
    if(result ==="win"){
        console.log("You WIN!");
        playerCounter++;
    }
    else if(result ==="loss"){
        console.log("You LOSE!");
        computerCounter++;
    }
    else if(result ==="tie"){
        console.log("It's a TIE!");
    }
    else{
        console.log("Check for grammar mistakes");
    }

    let playerWins = "You win " + playerCounter + ":" + computerCounter;
    let computerWins = "You lose " + playerCounter + ":" + computerCounter;
    
    if(playerCounter > computerCounter){
        return console.log(playerWins);
    }
    else if(playerCounter === computerCounter){
        console.log("You are tied with the computer")
    }
    else{
        return console.log(computerWins);
    }

}
console.log(game());





















//  console.log("You WIN! Paper beats rock!");
// console.log("You LOSE! Paper beats rock!");
//  console.log("You WIN! Scissors beats paper!");
// console.log("You LOSE! Scissors beats paper!");
// console.log("You WIN! Rock beats scissors!");
// console.log("You LOSE! Rock beats scissors!");