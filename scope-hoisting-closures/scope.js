// Global vs Local Scope -Variables in JavaScript have either global, function (local), or block scope.

//  Global Scope

let name = "Alice";

function greet() {
  console.log("Hello", name); // accesses global 'name'
}
greet();

// local scope 
function showAge() {
  let age = 30; // only accessible here
  console.log(age);
}
showAge(); // 30
// console.log(age); //  Error: age is not defined


// block scope with let and const
{
  let a = 10;
  const b = 20;
}
// console.log(a); // Error
