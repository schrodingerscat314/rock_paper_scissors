 // console.log("Hello World")

let x = Math.floor(Math.random() * 3);

console.log(x);

function getComputerChoice(){
  
    if (x===0){
        computerChoice = "Rock";
        console.log("Rock");
    }
    else if (x===1){
        computerChoice = "Paper";
        console.log("Paper");
    }
    else if (x===2){
        computerChoice = "Scissors";
        console.log("Scissors");
    }
    
    return 0;
}

getComputerChoice();



 

