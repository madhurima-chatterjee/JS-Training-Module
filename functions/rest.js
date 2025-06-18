/* sum function */
function sum(...inputs) {
    console.log(inputs);             // gives output as an array
    console.log(...inputs);          // gives output as a value   
}

sum(1,2,3,4,5,67,43,3,7654,34)

// to get sum output
function sums(...input) {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        total += input[i];
    }
    console.log(`The sum is ${total}`);
}

sums(1, 2, 3, 4);


/* Rest with Functions and other arguments */
function fun(a,b,...c) {
    console.log(`a is ${a} & b is ${b}`);
    console.log(c);
    console.log(c[0]);
    console.log(c.length);
    console.log(c.indexOf('Edan'));
}
fun('Ronaldo', 'Messi','Pele', 'Neymar', 'Edan');


// using reduce method
function addAll(...nums) {
  return nums.reduce((acc, val) => acc + val, 0);
}
console.log(addAll(1, 2, 3, 4));