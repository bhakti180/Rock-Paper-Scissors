let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genComChoice =() =>{
    const options =["rock", "paper", "scissors"];
    const randIDX = Math.floor(Math.random()*3); //by this random number gets generated from 0-1, here we have stored opts in array so that we are treating that numner like array's address
    //as it get generated from 0-1, but here we will multiply it by 3 because we want till 2 index
    //Math.floor removes the extra values after decimal point in that random number
    return options[randIDX];
}
const drawGame = () =>{
    // console.log("game was draw.");
    msg.innerText="Game was draw. Play again"
    msg.style.backgroundColor ="purple";
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if (userWin){
        userScore++;
        userScorePara.innerText= userScore;
        // console.log("you win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("you loose");
        msg.innerText= `You loose, Computer ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    // console.log("user choice = ", userChoice);
    //generate computer choice
    const compChoice = genComChoice();
    // console.log("computer choice is", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false :true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else { //here last condition is scissors for user
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

//on each div we are going to add an event listener, so here choice is individual div
choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    } )
})