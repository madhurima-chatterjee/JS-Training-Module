// hoisting function 
sayHi(); // ✅ Works
function sayHi() {
  console.log("Hi!");
}

// variable hoisting
console.log(x); // undefined
var x = 5;

// console.log(y); //  ReferenceError
// let y = 10;

