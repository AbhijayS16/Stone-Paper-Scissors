let stone = document.getElementById("stone");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
const choices = document.querySelectorAll(".choice");
let msg = document.getElementById("msg");
let user_score = document.querySelector("#user-score");
let comp_score = document.querySelector("#computer-score");


let userScore = 0;
let compScore = 0;

const genCompChoice = ()=>{
    const options =["stone","paper","scissors"];
    return options[Math.floor(Math.random()*3)];

};

const draw=(userChoice,compChoice)=>{
    msg.innerText = `Draw! Both are ${userChoice}.`;
    msg.style.backgroundColor ="#081b31";

};

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("You win!");
        userScore++;
        user_score.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor ="lightgreen";
    }
    else{
        console.log("Computer wins!");
        compScore++;
        comp_score.innerText = compScore;
        msg.innerText = `Computer wins! ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor ="red";
    }

};


const playGame = (userChoice)=>{
    console.log("User's choice is ",userChoice);
    //generate comp choice
    const compChoice = genCompChoice();
    console.log("Comp choice is ",compChoice);

    if(userChoice === compChoice)
        draw(userChoice,compChoice);
    else 
    {
        let userWin = true;
        if(userChoice=="stone"){
            userWin = compChoice=="paper" ? false:true;
        }
        else if(userChoice=="paper")
        {
            userWin = compChoice=="scissors" ? false:true;
        }
        else
        {
            userWin = compChoice=="paper" ? true:false;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    


};


choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });

});