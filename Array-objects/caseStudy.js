
// You have an array of employee objects:

const employees = [
  { id: 1, name: "Alice", dept: "HR", salary: 50000 },
  { id: 2, name: "Bob", dept: "Engineering", salary: 70000 },
  { id: 3, name: "Charlie", dept: "HR", salary: 60000 },
];

// Filter HR Department -
const hrEmployees = employees.filter(emp => emp.dept === "HR");
console.log(hrEmployees);

// Format Name and salary-
const formatted = employees.map(emp => `${emp.name}: ₹${emp.salary}`);
console.log(formatted);

// Total Salary using reduce-
const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log("Total Salary:", total);

// Find employee by name - 
const emp = employees.find(emp => emp.name === "Bob");
console.log(emp);

// using object entries for formatting - 
Object.entries(emp).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

