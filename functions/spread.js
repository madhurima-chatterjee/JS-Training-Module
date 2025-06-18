/* It replaces apply method */
function sum(a,b,c) {
    console.log(a+b+c);
}
var arrval = [1,2,3];
sum.apply(null, arrval);

// using spread operators //
function sums(a,b,c) {
    console.log(a+b+c);
}
var arrval1 = [11,22,33];
sums(...arrval1);


/* It replaces concatenate */
let arr = ["pune", "Goa", "Indore", "Mumbai"];
let arr1 = ['Kerala', 'chennai', 'Manipur', 'Assam'];

arr = arr1.concat(arr);
console.log("concatenate method - ", arr);

// using spread operator //
arr = [...arr,...arr1];
console.log("adding 2 array using spread function - ", arr);


/* replaced copy method  */
let copy1 = [1,2,3,4];
let copy2 = copy1;
console.log("copy 1 is- ", copy1, "&", "copy 2 is-", copy2);

// adding data in copy 2 
copy2.push(6,7,8);

console.log("copy 1 is- ", copy1, "&", "copy 2 is-", copy2);

// since it has changed for the array, we use spread operator to do this
let acc = [34,54,64];
let acc1 = [...acc,6,7,8];
console.log("acc is- ", acc, "&", "acc1 is-", acc1);

// spread with objects
const user = { name: "Alice" };
const updated = { ...user, age: 30 };
console.log(updated); // { name: "Alice", age: 30 }

