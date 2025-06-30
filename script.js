let userScore = 0;
let comScore = 0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
 //generate computer's choice
const genCompChoice =() =>{
    const options=["rock","paper","scissor"];
    randomIdx=Math.floor(Math.random()*3);
     return options[randomIdx];
}
const drawGame =() =>{
    console.log("game was draw");
     msg.innerText ="Draw";
}

const showWinner=(userWin) =>{

    if(userWin){
        console.log("you won!!");
        msg.innerText ="you win";
        msg.style.backgroundColor = "green";
    }else{
        console.log("you loose!!");
         msg.innerText ="you loose";
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
        showWinner(userWin);
    }
    
}

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice=choice.getAttribute("id");

        playGame(userChoice);
    })
})

