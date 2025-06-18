/* FOR LOOP
Calculate sum of 1 to 5 */
let sum = 0
for (let i = 1; i <= 5; i++) {
    sum = sum + i;
}
console.log('sum of 1 to 5 = ', sum);
console.log("loop has ended.");

// calculate sum of 1 to 100 //
let a = 0;
let n = 100;
for (let i = 1; i <= n; i++) {
    a = a + i;
}
console.log("sum of 1 to 100 is: ", a);
console.log("loop has ended");


/* WHILE LOOP
Modify your program to print only even numbers from 1 to 20. */
let num = 1;
while (num <= 20) {
    if(num % 2 ===0) {
        console.log(num);
    }
    num++;
}


// DO WHILE //
let i = 1;

do {
  console.log("Count: " + i);
  i++;
} while (i <= 5);


/* FOR- OF - LOOP */
let str = "My Console";
for (let i of str) {
    console.log("i", i);
}

let size = 0
for (let i of str) {
    console.log("i", i);
    size++
}
console.log("string size is ", size);


/* FOR - IN - LOOP */
let student = {
    fullname : "Rahul Kumar",
    age      : 20,
    cgpa     : 7.5,
    ispass   : true,
};
for (let key in student) {
    console.log("key = ", key, "Value = ", student[key]);
}