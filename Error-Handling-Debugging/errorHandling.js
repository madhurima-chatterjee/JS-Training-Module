// try-catch-finally

// Basic Syntax

try {
  // code that may throw error
} catch (err) {
  // handle error
} finally {
  // always runs (optional)
}

// catching synchronous error
try {
  let result = x + 1; // x is not defined
} catch (err) {
  console.error("Caught error:", err.message);
}

// with finally
try {
  console.log("Start");
  throw new Error("Oops!");
} catch (e) {
  console.warn("Warning:", e.message);
} finally {
  console.log("Cleanup done.");
}

// catching errors in functions
function riskyDivide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}

try {
  console.log(riskyDivide(10, 0));
} catch (e) {
  console.log("Handled:", e.message);
}


// illustrations
console.log("App started");
console.warn("Low disk space");
console.error("Failed to load file");
console.table([
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
]);
