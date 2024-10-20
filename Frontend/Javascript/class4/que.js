// Exercise 1: Simple Calculator with a Loop
let a = parseInt(prompt("Enter the First Number"));

let b = prompt("Enter your operation like +,-,*,/,%");

let c = parseInt(prompt("Enter your Second number"));

switch (b) {
  case "+":
    console.log("Two number sum = ", a + c);
    break;
  case "-":
    console.log("Two number minus = ", a - c);
    break;
  case "*":
    console.log("Two number multi = ", a * c);
    break;
  case "/":
    console.log("Two number divide = ", a / c);
    break;
  case "%":
    console.log("Two number modulos = ", a % c);
    break;

  default:
    console.log("Invalid Opperation");
    break;
}

// ## Exercise 2: Guessing Game
let randomNumber = Math.random() * 100;
let number = Math.ceil(randomNumber);
// console.log(number); to check the number
while (true) {
  let GuessNumber = parseInt(prompt("Enter The Guess Number"));
  if (GuessNumber === number) {
    console.log("Congratulation ! you find the number " + number);
    break;
  } else if (GuessNumber < number) {
    console.log("Number is Higher than guess number");
  } else if (GuessNumber > number) {
    console.log("number is Lower than guess number");
  } else {
    console.log("Try again");
  }
}
