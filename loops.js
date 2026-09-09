// JavaScript Loops

// ==========================================
// 1. for loop
// ==========================================

// start → condition → operation

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

for (let i = 0; i < 10; i += 2) {
    console.log(i);
}

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


// ==========================================
// 2. while loop
// ==========================================

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

let count = 10;

while (count > 0) {
    console.log(count);
    count--;
}


// ==========================================
// 3. do...while loop
// ==========================================

let j = 1;

do {
    console.log(j);
    j++;
} while (j <= 5);


// Runs at least once

let x = 10;

do {
    console.log("Executed");
} while (x < 5);


// ==========================================
// 4. break
// ==========================================

// Stops the loop completely

for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        break;
    }

    console.log(i);
}


// Search for a value

const numbers = [10, 20, 30, 40, 50];
let found = false;

for (let number of numbers) {
    if (number === 30) {
        found = true;
        break;
    }
}

console.log(found);


// ==========================================
// 5. continue
// ==========================================

// Skips the current iteration

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }

    console.log(i);
}


// Print only positive numbers

const values = [10, -5, 20, -2, 30];

for (let value of values) {
    if (value < 0) {
        continue;
    }

    console.log(value);
}


// ==========================================
// 6. Nested loops
// ==========================================

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(i, j);
    }
}


// Multiplication table

let number = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}


// ==========================================
// 7. for...of
// ==========================================

// Iterates over values

const fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log(fruit);
}


// String is also iterable

const name = "Aryan";

for (let character of name) {
    console.log(character);
}


// Using break with for...of

for (let fruit of fruits) {
    if (fruit === "Banana") {
        break;
    }

    console.log(fruit);
}


// ==========================================
// 8. forEach()
// ==========================================

// Array method

const nums = [10, 20, 30, 40];

nums.forEach((num) => {
    console.log(num);
});


// Value + index

nums.forEach((num, index) => {
    console.log(index, num);
});


// Perform calculation

nums.forEach((num) => {
    console.log(num * 2);
});


// ==========================================
// 9. for...in
// ==========================================

// Iterates over keys

const person = {
    name: "Aryan",
    age: 22,
    city: "Delhi"
};

for (let key in person) {
    console.log(key);
}


// Key + value

for (let key in person) {
    console.log(key, person[key]);
}


// ==========================================
// 10. for...in vs for...of
// ==========================================

const colors = ["Red", "Green", "Blue"];

for (let index in colors) {
    console.log(index);
}

for (let color of colors) {
    console.log(color);
}


// ==========================================
// 11. Loop through array of objects
// ==========================================

const users = [
    { name: "Aryan", age: 22 },
    { name: "Rahul", age: 25 },
    { name: "Aman", age: 21 }
];

for (let user of users) {
    console.log(user.name, user.age);
}


// ==========================================
// 12. Find a user
// ==========================================

for (let user of users) {
    if (user.age > 23) {
        console.log(user.name);
        break;
    }
}


// ==========================================
// 13. Nested object loop
// ==========================================

const student = {
    name: "Aryan",
    marks: {
        math: 90,
        science: 85,
        english: 88
    }
};

for (let subject in student.marks) {
    console.log(subject, student.marks[subject]);
}


// ==========================================
// 14. Sum using loop
// ==========================================

const prices = [100, 200, 300, 400];

let total = 0;

for (let price of prices) {
    total += price;
}

console.log(total);


// ==========================================
// 15. Count elements
// ==========================================

const scores = [45, 78, 90, 32, 88];

let passed = 0;

for (let score of scores) {
    if (score >= 50) {
        passed++;
    }
}

console.log(passed);


// ==========================================
// 16. Loop with condition
// ==========================================

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}


// ==========================================
// 17. Reverse array using loop
// ==========================================

const items = ["A", "B", "C", "D"];

for (let i = items.length - 1; i >= 0; i--) {
    console.log(items[i]);
}


// ==========================================
// 18. Early return inside a loop
// ==========================================

function findNumber(numbers, target) {

    for (let number of numbers) {
        if (number === target) {
            return number;
        }
    }

    return null;
}

console.log(findNumber([10, 20, 30, 40], 30));
console.log(findNumber([10, 20, 30, 40], 50));