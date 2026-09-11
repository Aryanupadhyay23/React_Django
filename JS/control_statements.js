// ==========================================================
//              JAVASCRIPT CONDITIONAL STATEMENTS
// ==========================================================
//
// Topics:
// 1. if
// 2. else if
// 3. else
// 4. switch-case
// 5. Early return pattern
// 6. switch-case fallthrough
//
// Conditional statements allow JavaScript to make decisions
// based on whether a condition is true or false.
//
// ==========================================================


// ==========================================================
// 1. IF STATEMENT
// ==========================================================
//
// `if` executes a block of code only when its condition
// evaluates to true.
//
// Syntax:
//
// if (condition) {
//     // code
// }
//
// ==========================================================

let age = 20;

if (age >= 18) {
    console.log("You are an adult");
}


// Example with a Boolean condition

let isLoggedIn = true;

if (isLoggedIn) {
    console.log("Welcome to the website");
}


// ==========================================================
// 2. ELSE STATEMENT
// ==========================================================
//
// `else` executes when the `if` condition is false.
//
// It gives us an alternative path.
//
// ==========================================================

let temperature = 25;

if (temperature > 30) {
    console.log("It is hot");
} else {
    console.log("It is not very hot");
}


// Example

let hasPermission = false;

if (hasPermission) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}


// ==========================================================
// 3. ELSE IF
// ==========================================================
//
// `else if` allows us to check multiple conditions.
//
// JavaScript checks the conditions from top to bottom.
// Once one condition is true, its block executes and the
// remaining conditions are skipped.
//
// ==========================================================

let marks = 75;

if (marks >= 90) {
    console.log("Grade A+");
} else if (marks >= 80) {
    console.log("Grade A");
} else if (marks >= 70) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else {
    console.log("Fail");
}


// ==========================================================
// 4. SWITCH-CASE
// ==========================================================
//
// `switch` is useful when we want to compare one value
// against multiple possible values.
//
// Syntax:
//
// switch (value) {
//     case value1:
//         // code
//         break;
//
//     case value2:
//         // code
//         break;
//
//     default:
//         // code
// }
//
// `break` stops execution of the switch.
//
// `default` runs when no case matches.
//
// ==========================================================

let day = 3;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    default:
        console.log("Invalid day");
}


// ==========================================================
// 5. SWITCH WITH STRINGS
// ==========================================================

let role = "admin";

switch (role) {

    case "admin":
        console.log("You have full access");
        break;

    case "user":
        console.log("You have normal access");
        break;

    case "guest":
        console.log("You have limited access");
        break;

    default:
        console.log("Unknown role");
}


// ==========================================================
// 6. EARLY RETURN PATTERN
// ==========================================================
//
// Early return means checking an invalid/unwanted condition
// first and returning immediately.
//
// This helps avoid deeply nested if-else statements.
//
// It is especially common inside functions.
//
// ==========================================================

function checkAge(age) {

    if (age < 18) {
        return "You are not allowed";
    }

    return "You are allowed";
}

console.log(checkAge(20));
console.log(checkAge(15));


// ----------------------------------------------------------
// Without early return:
//
// function checkAge(age) {
//
//     if (age >= 18) {
//         return "You are allowed";
//     } else {
//         return "You are not allowed";
//     }
// }
//
// Early return can make more complicated functions easier
// to read.
// ----------------------------------------------------------


// ==========================================================
// 7. EARLY RETURN WITH MULTIPLE CONDITIONS
// ==========================================================

function loginUser(username, password) {

    if (!username) {
        return "Username is required";
    }

    if (!password) {
        return "Password is required";
    }

    if (password.length < 6) {
        return "Password must be at least 6 characters";
    }

    return "Login successful";
}

console.log(loginUser("", "123456"));
console.log(loginUser("Aryan", ""));
console.log(loginUser("Aryan", "123"));
console.log(loginUser("Aryan", "123456"));


// ==========================================================
// 8. SWITCH-CASE FALLTHROUGH
// ==========================================================
//
// Normally, `break` stops a switch after a matching case.
//
// If we DON'T use `break`, JavaScript continues executing
// the cases below it.
//
// This is called FALLTHROUGH.
//
// Example:
//
// case 1:
//     code
//
// case 2:
//     code
//
// If case 1 matches, both case 1 and case 2 code can execute
// because there is no break after case 1.
//
// ==========================================================

let number = 1;

switch (number) {

    case 1:
        console.log("One");

    case 2:
        console.log("Two");

    case 3:
        console.log("Three");

    default:
        console.log("Default");
}


// Output:
//
// One
// Two
// Three
// Default
//
// Why?
//
// case 1 matched.
// There was no `break`, so JavaScript continued executing
// case 2, case 3, and default.
//
//
// ==========================================================
// 9. INTENTIONAL FALLTHROUGH
// ==========================================================
//
// Fallthrough is not always a mistake.
//
// We can intentionally use it when multiple cases should
// execute the same code.
//
// Example:
//
// Monday-Friday are working days.
// Saturday-Sunday are weekends.
//
// ==========================================================

let today = "Saturday";

switch (today) {

    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("Working day");
        break;

    case "Saturday":
    case "Sunday":
        console.log("Weekend");
        break;

    default:
        console.log("Invalid day");
}


// Here:
//
// Monday -> falls through to Tuesday -> Wednesday...
// until Friday, where the shared code executes.
//
// Saturday -> falls through to Sunday -> shared code executes.
//
// This is an example of useful/intentional fallthrough.


// ==========================================================
// 10. IF/ELSE VS SWITCH
// ==========================================================
//
// Use `if/else` when you are checking conditions:
//
// age >= 18
// marks > 80
// price < 1000
//
// Use `switch` when you are comparing one value against
// multiple specific values:
//
// day === 1
// role === "admin"
// color === "red"
//
// ==========================================================


// IF/ELSE

let score = 85;

if (score >= 90) {
    console.log("Excellent");
} else if (score >= 75) {
    console.log("Good");
} else {
    console.log("Needs improvement");
}


// SWITCH

let fruit = "apple";

switch (fruit) {

    case "apple":
        console.log("Apple selected");
        break;

    case "banana":
        console.log("Banana selected");
        break;

    case "mango":
        console.log("Mango selected");
        break;

    default:
        console.log("Unknown fruit");
}


// ==========================================================
// QUICK SUMMARY
// ==========================================================
//
// if
// -> Executes code when a condition is true.
//
// else
// -> Executes when the if condition is false.
//
// else if
// -> Allows multiple conditions to be checked.
//
// switch
// -> Compares one value against multiple cases.
//
// break
// -> Stops execution of the switch.
//
// default
// -> Runs when no switch case matches.
//
// Early return
// -> Returns from a function as soon as an invalid/unwanted
//    condition is detected.
//
// Fallthrough
// -> Happens when a switch case has no break and execution
//    continues into the next case.
//
// ==========================================================