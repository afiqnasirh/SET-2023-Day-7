console.log("javascript is loaded");

// alert("Hello World")

let firstName = prompt("what is your first name?");
let lastName = prompt("what is your last name?");
let birthYear = prompt("What is your birth year?");

// this operation
let fullName = firstName + " " + lastName;
let age = 2023 - birthYear;
// let fullName;

// reassign

// fx declaration
// let calculatedAgeWithString;

function calcAge(params) {
  let yearWord;
  if (age > 1) {
    yearWord = "years";
  } else {
    yearWord = "year";
  }

  return `${age} ${yearWord}`;
}

let calculatedAgeWithString = calcAge();

// console.log(gender);

// template literal
let newGreetings = `Hello my friends, nice to meet you. My name is ${fullName} and I am ${age} years old`;
alert(newGreetings);

// global scope(everything  bahagian luar), scope
