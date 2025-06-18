// Strings - text //
let name = "Alice Bull";
let greeting = 'Hello';
let sentence = `Welcome, ${name}!`;

console.log("name of the user is", name);
console.log(sentence);
console.log("Length of the username is", name.length);
console.log("username in block letters", name.toUpperCase());
console.log("username in small letters", name.toLowerCase());

let name0 = name.trim();
console.log('Trim case -', name0);

name4 = name.slice(5,10);
console.log('Sliced String -', name4);

console.log("Concatenate-", greeting + " " + sentence);
console.log('letter in 2nd position is ', name[2]);

// Numbers //
let age = 25;
console.log("age of user is ", age);
// special numbers - Infinity, NaN //
console.log(1 / 0);
console.log("abc" * 3);

// Boolean //
let isLoggedIn = true;
console.log("Has user logged in -", isLoggedIn);

// null //
let selection = null;
console.log("info = ", selection);

// undefined //
let score;
console.log('scoore of the user is ', score);


var userName = "Mrinalini"
console.log("type of a: ", typeof userName);
console.log(`The name of the user is ${userName}`);


// Practice - working with variable and operators
/* create 2 variable a and b  that should store the values 5 and 3.
Also add 3rd variable that stores sum of a and b. */
let a = 5;
let b = 3;
let sum = a + b;
console.log("sum:", sum);
console.log(`Data Type of ${sum} is ${typeof(sum)}`);


/* create 2 variables one that holds user input (number) and one that holds no value initially (result).
set the result variable to 18 plus the value stored in user Input.
Add 3 additional line of code where you change the result variable again by substracting a value of you choice, multiplying and diividing it. 
Think about the value stored in the user input variale you created - did that value change. Alert the result and the userinput variable in two separate alert cells. */
let userInput = 10;
let result;
result = 18 + userInput;
result = result - 4;
result = result * 2;
result = result / 2;
// alert("result: ", result);           //alert statements are meant for browsers
// alert("User Input: ", userInput);
console.log("result: ", result);
console.log("User Input: ", userInput); 


/* Generate user's full name.
Start username with @ followed by their full name and ending with the fullname length.*/
let nameOfUser = "Isha Jaiswal";
let userId = "@" + nameOfUser + nameOfUser.length;
console.log("user name is:", userId);
