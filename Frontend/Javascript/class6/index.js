//WAF to print greeting a user
// const greeting = (name, hour) => {
//   if (hour < 12) {
//     return `hey ${name} good morning ;`;
//   } else if (hour < 18) {
//     return `hey ${name} good afternoon ;`;
//   } else {
//     return `hey ${name} good evening ;`;
//   }
// };
// const result = greeting("dd", 10);
// console.log(result);

//switch case
// const calculator = (a, b, operator) => {
//   switch (operator) {
//     case "+":
//       return a + b;
//       break;

//     case "*":
//       return a * b;
//       break;

// case "-":
//   return a - b;
//   break;

// case "/":
//   return a / b;
//   break;
// default:
//       return "invalid";
//   }
// };
// const output = calculator(12, 10, "+");
// console.log(output);

// const add = (a, b) => console.log(add(4, 6));//

// const add1 = (a, b) => a + b;
// console.log(add1(2, 3));

//Task: BMI calculator
// const bmi = () => {
//   let weight = 70;
//   let height = 1.7;
//   let bmi = weight / (height * height);
//   return bmi;

//   console.log(bmi);
//   if (bmi < 18.5) {
//     console.log("Underweight");
//   } else if (bmi >= 18.5 && bmi < 25) {
//     console.log("Normal weight");
//   } else if (bmi >= 25 && bmi < 30) {
//     console.log("Overweight");
//   } else {
//     console.log("Obese");
//   }
// };

//Rest operator
// const printNumbers = (...numbers) => {
//   return numbers;
// };
// let output = printNumbers(1, 2, 3, 4, 5,6,7,8);
// console.log(output);

//callback function
//when a function is called as an argument to another function, it is called a callback function.
// syntax: functionName(num, callback) {
// console.log( `my name ${name}`);
// return callback;
// }

// function hello() {
//   return "Hello";
// }

//todo:make a user authentication system using callback function
//password validator

//synchronous
//line by line
// console.log(1);
// console.log(2);
// console.log(3);
//if error happens it will stop the execution and not switch to next line

//asynchronous
//if error happens in line 1, it will not stop the execution and switch to next line

//setTimeout(() =>{} )//ananomous function
//use to
//setInterval(() => {}; //1 second
//it will print as time

//ex:
setTimeout(() => {
  console.log("usbm");
}, 5000); //5 seconds

//ex:
setInterval(() => {
  console.log("usbm");
}, 1000); //1 second //every 1s it will print "usbm"
