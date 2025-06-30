let userScore = 0;
let compScore = 0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

 //generate computer's choice
const genCompChoice =() =>{
    const options=["rock","paper","scissor"];
    randomIdx=Math.floor(Math.random()*3);
     return options[randomIdx];
}
const drawGame =() =>{
    console.log("game was draw");
     msg.innerText ="Draw";
      msg.style.backgroundColor = "cadetblue";
}

const showWinner=(userWin,userChoice,compChoice) =>{

    if(userWin){
        userScore =userScore+1;
        userScorePara.innerText=userScore;
        msg.innerText ="you win ! " +" "+"your"+ " " +userChoice +" "+ "beats" +" "+ compChoice;
        msg.style.backgroundColor = "green";
    }else{
       compScore=compScore+1;
       compScorePara.innerText=compScore;
         msg.innerText ="you loose ! " +" "+ compChoice +" "+ "beats" +" "+"your"+" "+ userChoice;
          msg.style.backgroundColor = "red";
    }

}

const playGame =(userChoice) =>{

    console.log("User choice =",userChoice);

    //generate computer's choice
    const compChoice=genCompChoice();
    console.log("Computer choice =",compChoice);

    if(userChoice === compChoice){
       //draw game
       drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //computer choice can be paper or scissor
           userWin= compChoice ==="paper" ? false :true;//using ternary operator to compact the code

        }else if(userChoice === "paper"){
            //computer choice can be rock or scissor
           userWin = compChoice==="rock" ? true :false ;//using ternary operator to compact the code
        }else{
            //userChoice is Scissor and compChoice is rock or paper
            userWin = compChoice === "rock" ? false :true ;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
}

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice=choice.getAttribute("id");

        playGame(userChoice);
    })
})

