//defining variables 

const buttons = document.querySelectorAll("button");
let userChoice;

//event listener for button to trigger variable and set variable into function

buttons.forEach((button) => {
    button.addEventListener("click", function(event){
        userChoice = event.target.textContent;
        playGame();
    });
});   


 // Get user choice for rock, paper, scissors

function getUserChoice(){
   /* userChoice = '';
    userChoice = prompt("Enter your choice of rock, paper, or scissors: ");
    userChoice = userChoice.toLowerCase();
    
    while (userChoice != "rock" ^ userChoice != "paper" ^ userChoice != "scissors"){
        userChoice = prompt("Try again: enter in your choice of rock, paper, or scissors: ")
    }
    */
    userChoice = userChoice.toLowerCase();
    console.log("User:", userChoice);
    return (userChoice);
}





 // Get computer choice for rock, paper, scissors 


function getComputerChoice(){

let x = Math.floor(Math.random() * 3);
  
    if (x===0){
        computerChoice = "rock";
        console.log("Computer: rock");
    }
    else if (x===1){
        computerChoice = "paper";
        console.log("Computer: paper");
    }
    else if (x===2){
        computerChoice = "scissors";
        console.log("Computer: scissors");
    }
    
    return computerChoice;
}


//declaring players score variables 

var humanScore = 0;
var computerScore = 0;
var num = 0;

//logic to play a single round 

function playRound(){

    getUserChoice();
    getComputerChoice();

    if(userChoice == "scissors" && computerChoice == "paper"){
        console.log("You win, scissors beats paper");
        humanScore+=1;
        console.log("Human score:", humanScore);
        console.log("Computer score:", computerScore);
    }
    else if(userChoice == "paper" && computerChoice == "rock"){
        console.log("You win, paper beats rock");
        humanScore+=1;
        console.log("Human score:", humanScore);
        console.log("Computer score:", computerScore);
    }
    else if(userChoice == "rock" && computerChoice == "scissors"){
        console.log("You win, rock beats scissors");
        humanScore+=1;
        console.log("Human score:", humanScore);
        console.log("Computer score:", computerScore);
    }
    else if(computerChoice == "scissors" && userChoice == "paper"){
        console.log("You lose, scissors beats paper");
        computerScore+=1;
        console.log("Human score:", humanScore);
        console.log("Computer score:", computerScore);
    }
    else if(computerChoice == "paper" && userChoice == "rock"){
        console.log("You lose, paper beats rock");
        computerScore+=1;
        console.log("Human score:", humanScore);
        console.log("Computer score:", computerScore);
    }
    else if(computerChoice == "rock" && userChoice == "scissors"){
        console.log("You lose, rock beats scissors");
        computerScore+=1;
        console.log("Human score:", humanScore);
        console.log("Computer score:", computerScore);
    }
    else if(computerChoice == "rock" && userChoice == "rock"){
        console.log("It's a tie");
        console.log("Human score:", humanScore);
        console.log("Computer score:", computerScore);
    }
    else if(computerChoice == "scissors" && userChoice == "scissors"){
        console.log("It's a tie");
        console.log("Human score:", humanScore);
        console.log("Computer score:", computerScore);
    }
    else if(computerChoice == "paper" && userChoice == "paper"){
        console.log("It's a tie");
        console.log("Human score:", humanScore);
        console.log("Computer score:", computerScore);
    }
    else(console.log("error"));

    return 0;
}


//new function to play 5 rounds of the game and declare winner 


function playGame(){
    
    /*for(i=0; i<num; i++){
        playRound();
    }
    */
    playRound()
    console.log("Your score is:", humanScore);
    console.log("The computer's score is", computerScore);

    if(humanScore + computerScore == num && humanScore > computerScore){
        console.log("You win!");
        return(console.log("End of game."))
    }
    else if(humanScore + computerScore == num && humanScore < computerScore){
        console.log("You lose...");
        return(console.log("End of game."))
    }
    else if(humanScore + computerScore == num && humanScore == computerScore){
        console.log("It's a tie.");
        return(console.log("End of game."))
    }
};

//function for user to input number of rounds 

function rounds(){
    num = Number(prompt("How many times do you want to play rock, paper, scissors?"));
    return num;
}

rounds();







