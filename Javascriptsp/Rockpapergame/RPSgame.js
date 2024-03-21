let userscore=0;
let compscore=0;

const choice=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const gencompchoice=()=>{
    const options=["rock","paper","scissor"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
}

const drawGame=()=>{
    msg.innerText="Game draw.Play again";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userwin,userchoice,compchoice) =>{
        if(userwin){
            userscore++;
            userscorepara.innerText=userscore;
            msg.innerText=`you win! Your ${userchoice} beats ${compchoice}`;
            msg.style.backgroundColor="green";
        }else{
            compscore++;
            compscorepara.innerText=compscore;
            msg.innerText=`you lose! ${compchoice} beats your ${userchoice}`;
            msg.style.backgroundColor="Red";
        }
}

const playGame=(userchoice)=>{
    const compchoice=gencompchoice();

    if(userchoice===compchoice){
        drawGame();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
           userwin= compchoice==="paper" ? false: true;
        }else if(userchoice==="paper"){
            userwin=compchoice==="scissor"?false:true;
        }else{
            userwin=compchoice==="rock"?false:true;
        }
        showWinner(userwin,userchoice,compchoice);
    }
}

choice.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id")
        playGame(userchoice);
    });
});