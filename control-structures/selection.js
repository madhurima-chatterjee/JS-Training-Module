/* IF
How to check if a person is eligible to vote (age 18 or older)? */
let age = 18;
if (age >= 18) {
    console.log("Your are elligible to vote.");
}
if (age < 18) {
    console.log("You are not elligible to vote.");
}


/* ELSE 
How to check if a number is even or odd? */
let number = 19;
if (number % 2 === 0) {
    console.log("Number is even.");
} else {
    console.log("Number is odd.");
}


/* ELSE-IF
How to check if a student got a grade A, B, or C based on marks? */
let marks = 70;
if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}


// SWITCH 
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("Weekend");
}
