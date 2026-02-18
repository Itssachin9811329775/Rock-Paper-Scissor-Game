<<<<<<< HEAD
//it convert 1 "from" to "to" currency
const BaseUrl=
    "https://api.frankfurter.app/latest?";

const dropdownSelects=document.querySelectorAll(".dropdown select");
const fromCurr = document.querySelector(".from select");//from wala select
const toCurr = document.querySelector(".to select");//to wala select
let btn = document.querySelector(".container .btn")
let msg=document.querySelector(".msg");
//i want to populate the select options using contryList in codes.js
for (let select of dropdownSelects) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    //evt.target implies select element
    console.log(evt);
    updateFlag(evt.target);
  });
}
//it will change flag when acc. to currency code
const updateFlag = (element) => {//element implies select element
  let currCode = element.value;//where we clicked...,that's why..in option we set value ...
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

//updating exchange rate
const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }
  const URL = `${BaseUrl}amount=${amtVal}&from=${fromCurr.value}&to=${toCurr.value}`;
  console.log("Fetching URL:", URL); // check URL
  let response = await fetch(URL);
  let data = await response.json();
  console.log(data);
  let finalAmount = data.rates[toCurr.value];
  console.log(finalAmount);
  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};

//conversion
btn.addEventListener("click", (evt) => {
  evt.preventDefault();//submit nhi hoga
  updateExchangeRate();
});
//window load
window.addEventListener("load", () => {
  updateExchangeRate();
});
=======
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
>>>>>>> eb40c690112f2d9af9282433a4f0857a6eac2d2f
