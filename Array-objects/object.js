const student = {
    full_name : "Madhurima",
    age : 25,
    cgpa : 7.8,
    ispass : true
};

console.log(student);
console.log("the type of Student is ", typeof student);

student['age'] = student['age'] + 1;
console.log(student.age);
console.log(student.length);

// object operations - de-structuring, object entries, keys, values//
console.log("Extracting Properties from object", student.cgpa);

// do object destructuring like below in array! then reassign those variables :

console.log(Object.entries(student));
console.log(Object.keys(student));
console.log(Object.values(student));

// object.entries
const settings = { darkMode: true, layout: "grid" };
console.log(Object.entries(settings));

// object.keys
const user = { name: "Tom", age: 30 };
console.log(Object.keys(user));

//object.values
console.log(Object.values(user));

