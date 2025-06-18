// AND
let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("Entry allowed");
} else {
  console.log("Entry denied");
}


// OR
/* Practice - How to check if a customer is eligible for redeeming offers 
(e.g. Zomato Gold or coupon code)? */
let hasZomatoGold = true;
let hasCouponCode = false;

if (hasZomatoGold || hasCouponCode) {
  console.log("Customer is eligible for redeeming offers.");
} else {
  console.log("Customer is not eligible.");
}


let isWeekend = true;
let isHoliday = false;

if (isWeekend || isHoliday) {
  console.log("No work today!");
} else {
  console.log("Go to work.");
}


// NOT
let loggedIn = false;

if (!loggedIn) {
  console.log("Please log in.");
}


// TRUTH TABLE
console.log(true && false);
console.log(false || true);
console.log(!false);
