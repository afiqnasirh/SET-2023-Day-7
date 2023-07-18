// fx declaration
// hoisting, calculate all
// // function addition (x,y){
// let result = x + yield;
// return result;
// }

// const addition = (x, y) => {
//   let result = x + yield;
//   return result;
// };

// console.log(addition(10, 10));

let firstNameDom = document.querySelector("#firstName");
let lastNameDom = document.querySelector("#lastName");
let birthYearDom = document.querySelector("#birthYear");
let greetingsDom = document.querySelector("#greetings");

// function processData() {
//   console.log("firstNameDom.value");
// }

function processData() {
  let firstNameValue = firstNameDom.value;
  let lastNameValue = lastNameDom.value;
  let birthYearValue = birthYearDom.value;

  let fullName = firstNameValue + " " + lastNameValue;
  let age = 2023 - birthYearValue;

  let greetings = `My Name is ${fullName} and I am ${age} years old`;
  greetingsDom.innerText = greetings;
}

console.log();
