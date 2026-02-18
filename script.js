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
