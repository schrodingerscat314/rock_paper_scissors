 // console.log("Hello World")

 // Get user choice for rock, paper, scissors

function getUserChoice(){
    userChoice = prompt("Enter your choice of rock, paper, or scissors: ");
    userChoice = userChoice.toLowerCase();
    console.log("User:", userChoice);
}

getUserChoice();


 // Get computer choice for rock, paper, scissors 

let x = Math.floor(Math.random() * 3);

console.log(x);

function getComputerChoice(){
  
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
    
    return 0;
}

getComputerChoice();

//declaring players score variables 

let humanScore = 0;
let computerScore = 0;

//logic to play a single round 

function playRound(userChoice, computerChoice){
    if(userChoice == "scissors" && computerChoice == "paper"){
        console.log("You win, scissors beats paper");
        humanScore+=1;
    }
    else if(userChoice == "paper" && computerChoice == "rock"){
        console.log("You win, paper beats rock");
        humanScore+=1;
    }
    else if(userChoice == "rock" && computerChoice == "scissors"){
        console.log("You win, rock beats scissors");
        humanScore+=1;
    }
    else if(computerChoice == "scissors" && userChoice == "paper"){
        console.log("You lose, scissors beats paper");
        computerScore+=1;
    }
    else if(computerChoice == "paper" && userChoice == "rock"){
        console.log("You lose, paper beats rock");
        computerScore+=1;
    }
    else if(computerChoice == "rock" && userChoice == "scissors"){
        console.log("You lose, rock beats scissors");
        computerScore+=1;
    }
    else if(computerChoice == "rock" && userChoice == "rock"){
        console.log("It's a tie");
    }
    else if(computerChoice == "scissors" && userChoice == "scissors"){
        console.log("It's a tie");
    }
    else if(computerChoice == "paper" && userChoice == "paper"){
        console.log("It's a tie");
    }

    return 0;
}


//new function to play 5 rounds of the game and declare winner 

num = Number(prompt("How many times do you want to play rock, paper, scissors?"))
function playGame(num){
    for(i=0; i<num; i++){
        playRound(userChoice, computerChoice);
    }
    console.log("Your score is:", humanScore);
    console.log("The computer's score is", computerScore);

    if(humanScore > computerScore){
        console.log("You win!");
    }
    else if(humanScore < computerScore){
        console.log("You lose...");
    }
    else if(humanScore == computerScore){
        console.log("It's a tie.");
    }
}
