// basic, no parameter.
const sum = (a, b) => a + b;
const sayHello = () => console.log("Hello!");

console.log(sum(3, 4));
sayHello();

// implicit return
const square = x => x * x;
const cube = x => {
  return x * x * x;
};
console.log(square(4), cube(3));

// this
const obj = {
  value: 42,
  regular: function() {
    console.log("Regular:", this.value);
  },
  arrow: () => {
    console.log("Arrow:", this.value); // undefined or window
  }
};

obj.regular(); // Works
obj.arrow();   // Doesn't bind to obj

/* Practice: create a function using the function keyword that takes a string as an argument & returns the number of vowels in the string. Then create arrow function to create same task */
function countvowels (str) {
    let count = 0;
    for (const char of str) {
        if (
            char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
                count++;
            }
        }
        console.log(count);
}

countvowels("My Workspace Is Perfect");
