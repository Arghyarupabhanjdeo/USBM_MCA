//1.Generate random number between 1 to 100
// let start = 1;
// let end = 100;
// let totalNumbers = end - start + 1;
// console.log(Math.random() * totalNumbers);

// 2 . Round the number 6.75 down to the nearest integer.
// let b = 6.75;
// console.log("The nearest integer of 6.75 is = " + Math.round(b));

// 3. Round the number 9.12 up to the nearest integer.
// let c = 9.12;
// console.log("The nearest integer of 9.12 is = " + Math.round(c));

//5. Add 5 days to the current date.
// let currentdate = new Date();
// console.log(
//   `currentdate is = ${currentdate.getDate()} add 5 days to it the date move to = ${
//     currentdate.getDate() + 5
//   }`
// );

//6. Get the number of milliseconds between January 1, 2023, and today.
let startDate = new Date("2023,1,1");
let today = new Date();
let milliseconds = today - startDate;
console.log(
  "Milliseconds between January 1, 2023, and today = " + milliseconds
);
