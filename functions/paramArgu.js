// basic
function multiply(a, b) { // a, b = parameters
  return a * b;
}

console.log(multiply(5, 3)); // 5, 3 = arguments


function showDetails(name, age) {
  console.log(`Name: ${name}, Age: ${age}`);
}
showDetails("Tom", 25); // 'Tom', 25 = arguments

// Missing Arguments
function say(name, msg) {
  console.log(`${name} says: ${msg}`);
}
say("John"); // msg is undefined

// extra argument
function greet(name) {
  console.log(`Hello, ${name}`);
}
greet("Ana", "Extra arg"); // Extra argument ignored

