//mathematical operator
let num1 = 4;
let num2 = 9;
let result1 = num1 + num2;
let result2 = num1 - num2;
let result3 = num1 * num2;
let result4 = num1 / num2;

//Modulo operator
//to find out remainder
// let num = 29;
// let even = num % 2;
// console.log(even);

//Exponential operator
// let square = 2 ** 2;
// let cube = 2 ** 3;
// console.log(cube);

//relation operator
//to compare two value
// console.log(10 < 5); //boolean
// console.log(5 >= 5);
// console.log(10 > !5);

//equality operator
// console.log(5 == 5);
// console.log(5 == "5"); //bcoz only check value
// console.log(5 === "5"); //both value and datatype check
// console.log(5 !== "5");

//Conditional statement
//if (condition){
//true code to be executed here
//}

//falsy value:
//false,0,-0,"",``,null,undefined,NaN

// if (-0)
// if ("") {
//   console.log("it is true");
// }

//Task 1:- Given total_bill,discount_start_price if you satisfy  the condition print discount
//available otherwise print no discount
// let total_bill = 750;
// if (total_bill > 500) {
//   console.log("discount available");
// } else {
//   console.log("no discount");
// }

//task-2
// let age = 35;
// if (age >= 18) {
//   console.log("adult");
// } else if (age >=60) {
//   console.log("senior citizen");
// } else {
//   console.log("minor");
// }

//Task-3- check (male) and (age=22+)

//Task 4:- print all vowels
let char = "a";
switch (char) {
  case "a":
    console.log("it is vowel");
    break;
  case "e":
    console.log("it is vowel");
    break;
  case "i":
    console.log("it is vowel");
    break;
  case "o":
    console.log("it is vowel");
    break;
  case "u":
    console.log("it is vowel");
    break;
  default:
    console.log("not a vowel");
}
