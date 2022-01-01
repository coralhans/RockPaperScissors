// if player presses a weapon switch divs and also display player chosen weapon(animat in) + after a 2 second timeout animate in houses picked weapon. 
//animate in results
//play again = switch divs back

function computerPlay(){

    let weapons = ["rock","paper","scissors"];
    var computerWep = weapons[Math.floor(Math.random()* weapons.length)]

    return computerWep;
}
const pScore = document.querySelector('.player_score');
const cScore = document.querySelector('.computer_score');
const buttons = document.querySelectorAll('#playbutton');
let playerScore = 0;
let computerScore = 0;
const buttonDiv = document.querySelector('.buttons-container');
const battleDiv = document.querySelector('.battle');
const playerImage = document.querySelector('.emptyplayerwep');
const computerImage = document.querySelector('.emptycomputerwep')
const weapon = document.querySelector('.weapon');
const computerweapon = document.querySelector('.computerweapon');
const pimage = document.querySelector('.pweapon-image');
const cimage = document.querySelector('.cweapon-image');
const winner = document.querySelector('.win');
const tier = document.querySelector('.tie');
const loser = document.querySelector('.loss');
const resultContainer = document.querySelector('.result');
var result;
const insertResult = document.querySelector('.playerwep');
const replayButtons = document.querySelectorAll('#againbutton');
const gameOver = document.querySelector('#gameover');
//Winner weapon outlines
const pinnerRing = document.querySelector('.inner-ring');
const pouterRing = document.querySelector('.outer-ring');
const pcenterRing = document.querySelector('#emptywep');
const cinnerRing = document.querySelector('.inner-ring2');
const couterRing = document.querySelector('.outer-ring2');
const ccenterRing = document.querySelector('.emptywep2');

function refresh(){
    window.location.reload();
}

function swapDivs(){
    buttonDiv.style.display = "none";
    battleDiv.style.display = "flex";
}
function resetPage(){
    buttonDiv.style.display = "flex";
    battleDiv.style.display = "none";
    winner.style.display = "none";
    loser.style.display = "none";
    tier.style.display = "none";
    resultContainer.style.display= "none";

    weapon.classList.remove('rockimage-wrapper');
    pimage.classList.remove('rockimage');
    weapon.classList.remove('paperimage-wrapper');
    pimage.classList.remove('paperimage');
    weapon.classList.remove('scissorsimage-wrapper');
    pimage.classList.remove('scissorsimage');
    computerweapon.classList.remove('rockimage-wrapper');
    cimage.classList.remove('rockimage')
    computerweapon.classList.remove('paperimage-wrapper');
    cimage.classList.remove('paperimage')
    computerweapon.classList.remove('scissorsimage-wrapper');
    cimage.classList.remove('scissorsimage');

    pcenterRing.classList.remove('crstyle');
    pinnerRing.classList.remove('irstyle');
    pouterRing.classList.remove('orstyle');
    ccenterRing.classList.remove('crstyle');
    cinnerRing.classList.remove('irstyle');
    couterRing.classList.remove('orstyle');
}
function displayPlayerWep(){
    swapDivs();

    if(userChoice === "rock"){
        weapon.classList.add('rockimage-wrapper');
        pimage.classList.add('rockimage');
    }
    else if(userChoice === "paper"){
        weapon.classList.add('paperimage-wrapper');
        pimage.classList.add('paperimage');
    }
    else if(userChoice === "scissors"){
        weapon.classList.add('scissorsimage-wrapper');
        pimage.classList.add('scissorsimage');
    }
   
}
function displayComputerWep(){
    if(computerWep === "rock"){
        computerweapon.classList.add('rockimage-wrapper');
        cimage.classList.add('rockimage')
    }
    else if(computerWep === "paper"){
        computerweapon.classList.add('paperimage-wrapper');
        cimage.classList.add('paperimage')
    }
    else if(computerWep === "scissors"){
        computerweapon.classList.add('scissorsimage-wrapper');
        cimage.classList.add('scissorsimage');
    }
}

function displayResult(){
    
    let checkResult = playRound();
    if(checkResult === "win"){
        winner.style.display = "block";
        resultContainer.style.display = "flex";
        pcenterRing.classList.add('crstyle');
        pinnerRing.classList.add('irstyle');
        pouterRing.classList.add('orstyle');
    }
    else if(checkResult === "lose"){
        loser.style.display = "block";
        resultContainer.style.display = "flex";
        ccenterRing.classList.add('crstyle');
        cinnerRing.classList.add('irstyle');
        couterRing.classList.add('orstyle');
    }
    else if(checkResult === "tie"){
        tier.style.display = "block";
        resultContainer.style.display = "flex";
        
    }
    updateScore();
    
}

function updateScore(){
        pScore.innerHTML = playerScore;
        cScore.innerHTML = computerScore;
        

        if(playerScore === 5){
            
            winner.insertAdjacentHTML('afterbegin',`<div class="gameover"><h1>game over</h1></div>`);
            resultContainer.style.margin = "0";
            animItem.goToAndPlay(0,true);
            replayButtons.forEach((button) =>{
                button.addEventListener('click', ()=>{
                    refresh();
                    })
               });
            }
        else if(computerScore === 5){
            loser.insertAdjacentHTML('afterbegin',`<div class="gameover2"><h1>game over</h1></div>`);
            resultContainer.style.margin = "0";
            replayButtons.forEach((button) =>{
                button.addEventListener('click', ()=>{
                    refresh();
            })
        });
    }
}

replayButtons.forEach((button) =>{
 button.addEventListener('click', ()=>{
     resetPage();
 })
});

    buttons.forEach((button) =>{
        button.addEventListener('click', (e)=>{
            userChoice = e.target.className;
            computerWep = computerPlay();
            displayPlayerWep();
            setTimeout( ()=>{
                displayComputerWep();
            },1500);
            setTimeout( ()=>{
                displayResult();
            },3000);  
        })
    })

function playRound(){

    
    if(computerWep === userChoice){
        result = "tie";
        return result;
    }
    else if(userChoice === "rock" && computerWep=== "scissors"){
                        result = "win";
                        playerScore++;
                        return result;
            }
    else if(userChoice === "scissors" && computerWep=== "rock"){
                    result = "lose";
                    computerScore++;
                    return result;
            }
    else if(userChoice === "paper" && computerWep=== "scissors"){
                result = "lose";
                computerScore++;
                return result;
            }
    else if(userChoice === "scissors" && computerWep=== "paper"){
                    result = "win";
                    playerScore++;
                    return result;
            }
    else if(userChoice === "rock" && computerWep=== "paper"){
                    result = "lose";
                    computerScore++;
                    return result;
            }
    else if(userChoice === "paper" && computerWep=== "rock"){ 
                    result = "win";
                    playerScore++;
                    return result;
            }

}

var modal = document.getElementById("myModal");
var openModalbtn = document.getElementById("modalButton");
var closeModalbtn = document.getElementById("close");

openModalbtn.onclick = () =>{
    modal.style.display="block";
}

closeModalbtn.onclick = () =>{
    modal.style.display = "none";
}

window.onclick = (e) =>{
    if(e.target == modal){
        modal.style.display = "none";
    }
}


