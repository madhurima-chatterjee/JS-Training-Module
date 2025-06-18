// sign(), trunc() 

let num = 5.55;
console.log(Math.sign(num));

let num1 = -5.55;
console.log(Math.sign(num1));

let num2 = 0;
console.log(Math.sign(num2));

let num3 = -0;
console.log(Math.sign(num3));

let num4 = NaN;
console.log(Math.sign(num4));

let num5 = 'vinod';
console.log(Math.sign(num4));

let num6 = 5.556;
console.log(Math.trunc(num6));

let num7 = -5.956;
console.log(Math.trunc(num7));

let num8 = 5.596;
console.log(Math.floor(num8));

let num9 = -5.596;
console.log(Math.floor(num9));          // floor always gives lower value

let num10 = -5.596;
console.log(Math.ceil(num10));          // ceil gives higher value

// Exponentiation operator  (**) produces same result as Math.power(x,y). It raises the first operand to the power of second operand.
let a = 4;
let b = 2;
console.log("using operator - ", a ** b);
console.log("using method - ", Math.pow(a,b));

