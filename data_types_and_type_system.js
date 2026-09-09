// data types 


// primitive data types

let a = 12;

let b = a;


a = 14;
a = a + 10;
console.log(a)

console.log(b)

// reference data types

let c = [1,2,3,4];
let d = c;
c.pop();
console.log(d);
console.log(c);

// let c = [1,2,3,4];
// let d = c;
// c = [1,2,3,4,5];
// console.log(d);
// console.log(c);

// for strings
// '' - single quotes
// "" - double quotes
// `` - backticks


// for numbers
// 12 - integer
// 12.3 - number

// for booleans
// true and false
// let a = true;
// let b = false;

// null data type -> null (no value)
// let a = null;

// undefined data type 
// we made variable and we havenot given any value 
// by default value is undefined 
// let a; value given to a is undefined by default
// let z;
// console.log(z)

// // symbol data type 
// // symbol - unique immutable value.
// let name = {
//     uid: 1,
//     model: "aryan",
// }

// name.uid = 2;

// let u1 = Symbol("uid");
// let u2 = Symbol("uid");
// console.log(u1);
// console.log(u2);


// let obj = {
//     uid:1,
//     model: "aryan",
//     age:12,
//     email:"test@gmail.com",
// }

// let u1 = Symbol("uid");
// obj[u1] = "001";
// console.log(obj);

// let g = Number.MAX_SAFE_INTEGER;
// g+2;
// console.log(g);

// let num = 9007199254740991n;
// num + 3n;
// console.log(num);

let ref = [1,2,3];
let ref2 = ref;
ref.pop();
console.log(ref);
console.log(ref2);


let name1 = {
    name: "aryan",
};
let name2 = name1;
name2.name = "arya";
console.log(name1);
console.log(name2);

// dynamic typing

let var1 = 12;
console.log(var1);
var1 = 13;
console.log(var1);

// type coercion

console.log("5" + 1);
console.log(5 + "1");
console.log(5 - "1");

// truthy vs falsy values
// 0 false "" null undefined NaN document.all 
// all other are truthy