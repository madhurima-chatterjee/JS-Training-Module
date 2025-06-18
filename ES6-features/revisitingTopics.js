// let & const

let count = 1;
const PI = 3.14;

// Template Literals
const name = "Alice";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, Alice!

// object Destructuring
const user = { name: "Bob", age: 30 };
const { name, age } = user;
console.log(name); // Bob

// Array Destructuring
const colors = ["red", "green", "blue"];
const [primary, secondary] = colors;

// Default parameters
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}
greet(); // Hello, Guest

// spread and rest 
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]

const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 }; // { a: 1, b: 2 }


function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3)); // 6


// Arrow Function 
const add = (a, b) => a + b;


// classes
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

const dog = new Animal("Dog");
dog.speak(); // Dog makes a sound.
