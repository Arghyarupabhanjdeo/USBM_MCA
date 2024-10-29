//Task: diffrence between push(),pop(),,shift(),unshift() with proper defination and example
//push()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Pineapple");
console.log(fruits); // Output: ["Banana", "Orange", "Apple", "Mango", "Pineapple"]

//pop()

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
console.log(fruits2); // Output: ["Banana", "Orange", "Apple"]

//unshift()
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Pineapple");
console.log(fruits3); // Output: ["Pineapple", "Banana", "Orange", "Apple", "Mango"]

//shift()
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
console.log(fruits1); // Output: ["Orange", "Apple", "Mango"]
