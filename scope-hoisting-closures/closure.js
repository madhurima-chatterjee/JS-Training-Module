// simple closure
function outer() {
  const outerVar = "I'm outside!";
  return function inner() {
    console.log(outerVar);
  };
}
const fn = outer();
fn();

// Lexical scope Access
function parent() {
  let name = "Bob";

  function child() {
    console.log(name);
  }

  child();
}
parent();


// closure with Timeout
function delayedMessage(msg, delay) {
  setTimeout(function() {
    console.log("Message:", msg);
  }, delay);
}
delayedMessage("Hello!", 1000);
