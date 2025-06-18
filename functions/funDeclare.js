// Function Declaration
function greet() {
  console.log("Hello from Declaration!");
}

// Function Expression
const sayHi = function() {
  console.log("Hello from Expression!");
};

greet();
sayHi();


// hoisting
sayHello(); // Works (hoisted)
function sayHello() {
  console.log("Hello!");
}

// greet(); // Error: Cannot access before initialization
// const greet = function() {
//   console.log("Hi!");
// };

// named function expression
const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1); // Uses internal name
};
console.log(factorial(5));

//Ques: Create a function where you can add 2 numbers//
//FUNCTION DECLARATIONN //
function sum(x,y) {
    console.log(x + y);
}
// FUNCTION CALL //
sum(842 , 35389);

// Ques: Create a function where you can multiply 2 numbers and store it into a variable //
// FUNCTION EXPRESSION //
function product(x,y) {
    p = x * y;
    return p;
}
let val = product(533353,6353);
console.log(val);
