let images=document.querySelectorAll(".img");//id of all 3 iamges
console.log(images);

//getting user and comp id's
let user_id=document.querySelector("#user-id");
let comp_id=document.querySelector("#comp-id")
//updating score
let user_score=0;
let comp_score=0;
const updateScore=(userChoice,compChoice)=>{
    if(userChoice===compChoice){
        console.log("Math was Tie...")
    }
    else if(userChoice==="rock"){
        if(compChoice==="paper"){
            console.log(`Computer won this match and computer choice was ${compChoice}`);
            comp_score++;
            comp_id.innerText=comp_score;
        }
        else{//scissor
            console.log(`You won this match and your choice was ${userChoice}`);
            user_score++;
            user_id.innerText=user_score;
        }
    }
    else if(userChoice==="paper"){
        if(compChoice==="rock"){
            console.log(`You won this match and your choice was ${userChoice}`);
            user_score++;
            user_id.innerText=user_score;
        }
        else{//scissor
            console.log(`Computer won this match and computer choice was ${compChoice}`);
            comp_score++;
            comp_id.innerText=comp_score;
        }
    }
    else{//scissor
        if(compChoice==="rock"){
            console.log(`Computer won this match and computer choice was ${compChoice}`);
            comp_score++;
            comp_id.innerText=comp_score;
        }
        else{//paper
            console.log(`You won this match and your choice was ${userChoice}`);
            user_score++;
            user_id.innerText=user_score;
        }
    }
}
//generating comp choice
const generateCompChoice=(userChoice)=>{
    let options=["rock","paper","scissor"];
    const computerChoiceIdx=Math.floor(Math.random()*3);
    let compChoice=options[computerChoiceIdx];
    updateScore(userChoice,compChoice);
}
//starting
images.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        generateCompChoice(userChoice);
    });
});

//resetGame

let btn=document.querySelector(".btn");
btn.addEventListener("click",()=>{
    //reset
    user_id.innerText="0";
    comp_id.innerText="0";
    user_score=0;
    comp_score=0;
});