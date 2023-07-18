console.log("Hi");

let firstName = prompt("what is your first name?");
let lastName = prompt("what is your last name?");
let birthYear = prompt("What is your birth year?");



function calcAge(params) {
    let fullName = firstName + " " + lastName;
    let age = 2023 - birthYear;
  let yearWord;
    if (age < 16) {
        note = "fail";
    }
    else if (age >= 16 && age <= 18) {
        note = "Motorbike only";
    } else {
        note = "Car and Motorbike";
    }

    return note;

      

}

let failGreetings = ``;
alert(failGreetings);

let motorcycleGreetingsGreetings = ``;
alert(motorcycleGreetings);


let motorcycleGreetingsGreetings = ``;
alert(motorcycleGreeting