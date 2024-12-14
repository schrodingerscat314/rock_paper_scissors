 // console.log("Hello World")

 // Get user choice for rock, paper, scissors

userChoice = prompt("Enter your choice of rock, paper, or scissors: ");
userChoice = userChoice.toLowerCase();
console.log("User:", userChoice);

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






 

