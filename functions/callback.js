/* forEach Loop in Arrays - arr.forEach (callBack Functions) */
let arr = ['Python', 'JS', 'C', 'C++'];
arr.forEach(function printval(val) {
    console.log(val);
});

// this is used when we have to modify or use values inside array//

let array = ['Goa', 'Mmbai', 'Chennai', 'Chhattisgarh'];
arr.forEach((lang, idx, arr) => {
    console.log(lang.toUpperCase(), idx, arr);
});

/* Practice - For a given array of numbers, print the square of each value using the foeEach loop. */

let nums = [1,2,3,11,22,33];
nums.forEach((nums) => {
    console.log(nums * nums);
});

// setTimeout
function fetchData(callback) {
  setTimeout(() => {
    callback("Data loaded");
  }, 1000);
}

fetchData((msg) => {
  console.log(msg);
});

// basic
function greetUser(callback) {
  console.log("Preparing...");
  callback();
}
greetUser(() => console.log("Hello from callback!"));

// callback with parameter
function processNum(num, callback) {
  return callback(num);
}
const square = x => x * x;
console.log(processNum(4, square)); // 16


// array map with callback
const names = ["a", "b", "c"];
const upperNames = names.map(name => name.toUpperCase());
console.log(upperNames);
