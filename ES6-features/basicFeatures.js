// Block Scope & Function Scope in variables 
const whoWillWinToday = "India";        // global scope
if(true) {
    const whoWillWinToday = "New Zealand";
    console.log("who will win today in block-", whoWillWinToday);           //block scope
}
console.log("who will win today in function -", whoWillWinToday);               //function scope

// Template Literals or Template Strings
let a = 5;
let b = 3;
let sum = a + b;
console.log(`The sum of ${a} and ${b} is ${sum}.`);

let object = {
    item  : "pen",
    price : 10,
};
console.log(`the cost of ${object.item} is ${object.price}`);

// New String Methods
const str = "My workspace";
const str1 = "My Lifestyle";

console.log(str.startsWith('M'));
console.log(str1.endsWith('M'));
console.log(str.includes('space'));
console.log(str1.repeat(2));

/* Practice: Program to swap two numbers without third variables */
m = 7;
n = 77;
[m,n] = [n,m];
console.log(`value of m and n is ${m} , ${n} `);

//with variable //
let x = 5;
let y = 10;
let temp = x;
x = y;
y = temp;
console.log(`with temp variable, value of x is ${x}, & y is ${y}`);

