// JavaScript Arrays

// Creating an array
let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits);

// Accessing elements
console.log(fruits[0]); // Apple
console.log(fruits[2]); // Mango

// Changing an element
fruits[1] = "Grapes";
console.log(fruits);

// Array length
console.log(fruits.length);

// Adding elements
fruits.push("Pineapple");       // Add at the end
fruits.unshift("Strawberry");   // Add at the beginning

console.log(fruits);

// Removing elements
fruits.pop();       // Remove from the end
fruits.shift();     // Remove from the beginning

console.log(fruits);

// Add/remove elements using splice()
fruits.splice(1, 1);              // Remove 1 element at index 1
fruits.splice(1, 0, "Kiwi");      // Add Kiwi at index 1

console.log(fruits);

// Finding elements
console.log(fruits.indexOf("Mango"));
console.log(fruits.includes("Apple"));

// Loop through an array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// for...of loop
for (let fruit of fruits) {
    console.log(fruit);
}

// Array methods

let numbers = [1, 2, 3, 4, 5];

// map() creates a new array
let doubled = numbers.map(function(num) {
    return num * 2;
});

console.log(doubled);

// filter() creates a new array with matching elements
let even = numbers.filter(function(num) {
    return num % 2 === 0;
});

console.log(even);

// reduce() reduces an array to one value
let sum = numbers.reduce(function(total, num) {
    return total + num;
}, 0);

console.log(sum);

// forEach() runs a function for every element
numbers.forEach(function(num) {
    console.log(num);
});

// sort()
let names = ["Aryan", "Rahul", "Aman", "Karan"];

names.sort();
console.log(names);

// reverse()
names.reverse();
console.log(names);

// Combining arrays
let a = [1, 2, 3];
let b = [4, 5, 6];

let combined = a.concat(b);
console.log(combined);

// Spread operator
let combined2 = [...a, ...b];
console.log(combined2);

// Destructuring
let colors = ["Red", "Green", "Blue"];

let [first, second, third] = colors;

console.log(first);
console.log(second);
console.log(third);