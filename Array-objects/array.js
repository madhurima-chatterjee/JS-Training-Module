const info = ["Madhurima",25,7.8,true];
console.log(info);
console.log("the type of Student is ", typeof info);
console.log(info.age);
console.log(info.length);

// array destructuring //
let [name, yearsold, grade, passed] = info;
console.log("grade of madhurima is ", grade);
console.log(`${name} has passed exam with ${grade} marks`);

// looping over in arrays //
for (let idx = 0 ; idx < info.length; idx++) {
    console.log(info[idx]);
}

let cities = ["Pune", "Delhi", "Kerala", "Raipur", "Goa"];
for (let city of cities) {
    console.log("city is", city);
}

for (let city of cities) {
    console.log(city.toUpperCase());
}

//Ques - For a given array with marks of students - 85, 97, 44, 27, 76, 60. Find the average marks of the entire class.
let marks = [85,97,44,37,76,60];
let sum = 0;
for (let val of marks) {
    sum += val;
}
let avg = sum / marks.length;
console.log(`average of student's marks = ${avg}`);

// Ques - For a given array with prices of 5 items -> 250, 645, 300,900,50 . All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.
let items = [250, 645, 300, 900, 50];
for (let i = 0; i < items.length; i++) {
    let offer = items[i] / 10;
    items[i] -= offer;
}
console.log(items);

//Array Methods //
// push, pop, tostring //
let foodItems = ["idli","dosa","noodles","maggie"];
foodItems.push("humus & pitta");
console.log(foodItems);

let deletedItems = foodItems.pop();
console.log(foodItems);
console.log("deleted item", deletedItems);

console.log(foodItems.toString());

// toconcat , unshift, shift //
let marvelHeroes = ["thor", "superman", "ironman"];
let dcHeroes = ["superman","batman"];
let indianHeroes = ["shaktiman", "krish"]
let heroes = indianHeroes.concat(dcHeroes,marvelHeroes);
console.log(heroes);

marvelHeroes.unshift("antman");
console.log(marvelHeroes);

let val = marvelHeroes.shift();
console.log("deleted", val);

// slice, splice //
let books = ["2 states", "The Help", "Normal People","Guide", "Rainbow"]
console.log(books.slice(2,6));

let evenNumbers = [2,4,8,30,56,86,430,536,234];
let replace = evenNumbers.splice(4,1,40);
console.log(replace);
console.log(evenNumbers);

//Ques - Create an array to store companies - Bloomerg, Microsoft, Uber, Google, IBM, Netflix. Remove the first company from the array. Remove Uber and add ola in its place. Add Amazon at the end.//
let store = ["Bloomberg", "Microsoft", "uber", "Google", "IBM", "Netflix"];
let deleteFirst = store.shift();
console.log("Remove First company", deleteFirst);

let replaceUber = store.splice(1,1,"ola");
console.log("Replacing uber with ola", replaceUber);

let addEnd = store.push('amazon');
console.log("Final array", store);

// map, filter, reduce, includes //
// map - very similar to forEach. just it gives a new array.
let num = [1,2,3,4,5,6,7,8];
let double_num = num.map(num => num * 2);
console.log("new array:",double_num);

let evens = num.filter(num => num % 2 === 0);
console.log("even nums in the list:",evens);

let totalsum = num.reduce((total,num) => total + num, 0);
console.log("total by reduce is:", totalsum);

console.log(num.includes(6));

/* Practice => Make an array for marks of students. Filter out of the marks of students that scored 90. */

let mark = [ 87, 93, 88, 99, 84, 46, 94, 91, 98];

let toppers = mark.filter((ans) => {
    return ans > 90;
});
console.log("marks of toppers-", toppers);

// find
const users = [{id: 1}, {id: 2}, {id: 3}];
const user = users.find(u => u.id === 2);
console.log(user);
