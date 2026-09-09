// JavaScript Functions

// ==========================================
// 1. Function Declaration
// ==========================================

function greet() {
    console.log("Hello!");
}

greet();


// Parameters → variables in function definition
// Arguments → values passed to the function

function greetUser(name) {
    console.log("Hello", name);
}

greetUser("Aryan");


// ==========================================
// 2. Parameters and Arguments
// ==========================================

function add(a, b) {
    return a + b;
}

console.log(add(10, 20));


// ==========================================
// 3. Default Parameters
// ==========================================

function welcome(name = "Guest") {
    console.log("Welcome", name);
}

welcome("Aryan");
welcome();


// ==========================================
// 4. Rest Parameters
// ==========================================

// Collects multiple arguments into an array

function sum(...numbers) {
    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
}

console.log(sum(10, 20, 30));
console.log(sum(1, 2, 3, 4, 5));


// ==========================================
// 5. Spread Operator
// ==========================================

const nums = [10, 20, 30];

console.log(Math.max(...nums));

function addThree(a, b, c) {
    return a + b + c;
}

console.log(addThree(...nums));


// ==========================================
// 6. Return Values
// ==========================================

function multiply(a, b) {
    return a * b;
}

const result = multiply(5, 4);

console.log(result);


// ==========================================
// 7. Early Return
// ==========================================

function checkAge(age) {

    if (age < 18) {
        return "Not eligible";
    }

    return "Eligible";
}

console.log(checkAge(15));
console.log(checkAge(25));


// ==========================================
// 8. Function Expression
// ==========================================

const subtract = function (a, b) {
    return a - b;
};

console.log(subtract(20, 5));


// ==========================================
// 9. Arrow Function
// ==========================================

const square = (number) => {
    return number * number;
};

console.log(square(5));


// Short arrow function

const cube = number => number * number * number;

console.log(cube(3));


// Multiple parameters

const divide = (a, b) => a / b;

console.log(divide(10, 2));


// ==========================================
// 10. First-Class Functions
// ==========================================

// Function assigned to a variable

const sayHello = function () {
    console.log("Hello");
};

sayHello();


// Function passed as an argument

function executeFunction(fn) {
    fn();
}

executeFunction(sayHello);


// Function returned from another function

function createGreeting() {
    return function () {
        console.log("Hello from returned function");
    };
}

const greeting = createGreeting();

greeting();


// ==========================================
// 11. Higher-Order Functions
// ==========================================

// A function that takes another function
// or returns another function

function calculate(a, b, operation) {
    return operation(a, b);
}

const addition = (a, b) => a + b;
const multiplication = (a, b) => a * b;

console.log(calculate(10, 5, addition));
console.log(calculate(10, 5, multiplication));


// ==========================================
// 12. Pure Function
// ==========================================

// Same input → same output
// Does not change outside data

function pureAdd(a, b) {
    return a + b;
}

console.log(pureAdd(10, 20));


// ==========================================
// 13. Impure Function
// ==========================================

let count = 0;

function increaseCount() {
    count++;
}

increaseCount();
increaseCount();

console.log(count);


// ==========================================
// 14. Closures
// ==========================================

// Inner function remembers variables
// from its outer function

function counter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const increment = counter();

console.log(increment());
console.log(increment());
console.log(increment());


// ==========================================
// 15. Lexical Scoping
// ==========================================

function outer() {

    let message = "Hello";

    function inner() {
        console.log(message);
    }

    inner();
}

outer();


// ==========================================
// 16. IIFE
// ==========================================

// Immediately Invoked Function Expression

(function () {
    console.log("IIFE executed");
})();


// IIFE with parameters

(function (name) {
    console.log("Hello", name);
})("Aryan");


// ==========================================
// 17. Hoisting
// ==========================================

// Function declarations are hoisted

greetUserHoisted();

function greetUserHoisted() {
    console.log("Hello");
}


// Function expressions are NOT usable
// before their initialization

const expression = function () {
    console.log("Function expression");
};

expression();


// Arrow functions are also function expressions

const arrow = () => {
    console.log("Arrow function");
};

arrow();