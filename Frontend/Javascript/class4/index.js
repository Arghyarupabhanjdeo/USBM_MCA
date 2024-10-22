//Iteration

// 1.print from 1 to 10
// let start_num = 1;

//while loop
//ex- print 1 to 10
// let num = 1; // declartion
// console.log("Global:", num); // print 1
// while (num <= 10) {
//   console.log("Block:", num); // print 1 to 10
//   num++;
// }
// console.log("Global:", num); // print 11

//Do....While
//ex-Asking for user to the correct input
// let userAns;
// do {
//   userAns = prompt("What is the capital of Odisha?");
//   //   console.log("Wrong");
// } while (userAns !== "Bhubaneswar");
// console.log("Correct");
// console.log("Bhubanewsar" !== "Bhubanewsar"); // true

//For Loop
// for (let i = 0; i < 5; i++) {
//   console.log(i); //0,1,2,3,4
// }

// for (let i = 0; i <= 5; i++) {
//   console.log(i); //0,1,2,3,4,5
// }

// for (let i = 5; i >= 1; i--) {
//   console.log(i); //5,4,3,2,1,0
// }

//Task-1
//Generate random numbers and add them up to 5 times
// let sum = 0;
// for (let i = 0; i <= 5; i++) {
//   let random = Math.floor(Math.random() * 10);
//   let result = sum + random;
//   console.log(`the random sum result is ${result}`);
// }

//Nested loop
// for (let i = 0; i <= 5; i++) {
//   for (let j = 1; j <= 2; j++) {
//     console.log(j);
//   }
//   console.log(i);
// }

//example
//pattern printing
for (let i = 1; i <= 5; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  console.log(pattern);
}
