// var //
var name = "john";
console.log(name);

var name = "jack";
console.log("user name is" ,name);


// let //
let age = 25;
console.log("age of the user is", age);

//let age = 30;  Not allowed (redeclaration)
age = 30; //  Allowed (reassignment)
console.log("reassigned age", age);

// let variable is useful in loops //
for (let i = 0; i<3; i++) {
    console.log("loop i is",i);
}


// const //
const country = "india";
console.log("Name of my country is", country);

//country = "USA"; Error-assignment to constant variable (Type Error)


// Practice - Temprature conversion //
const celsius = 30;
let fahrenheit = (celsius * 9) / 5 + 32;
console.log(`${celsius}*C is = ${fahrenheit}F`);
