// ==========================================================
//                  JAVASCRIPT OPERATORS
// ==========================================================
//
// Operators are symbols/keywords used to perform operations
// on values and variables.
//
// Example:
//      10 + 5
//      10 = value
//      +  = operator
//      5  = value
//
// Main types covered here:
// 1. Arithmetic
// 2. Assignment
// 3. Comparison
// 4. Logical
// 5. Unary
// 6. Increment / Decrement
// 7. Ternary
// 8. Nullish Coalescing
// 9. Optional Chaining
// 10. String
// 11. Type
// 12. Bitwise
// 13. Operator Precedence
//
// ==========================================================


// ==========================================================
// 1. ARITHMETIC OPERATORS
// ==========================================================
//
// Arithmetic operators are used to perform mathematical
// calculations.
//
// +   Addition
// -   Subtraction
// *   Multiplication
// /   Division
// %   Modulus (remainder)
// **  Exponentiation (power)
//
// ==========================================================

let a = 10;
let b = 3;

console.log(a + b);   // Addition: 13
console.log(a - b);   // Subtraction: 7
console.log(a * b);   // Multiplication: 30
console.log(a / b);   // Division: 3.333...
console.log(a % b);   // Modulus: 1
console.log(a ** b);  // Exponentiation: 1000


// ----------------------------------------------------------
// + can also be used with strings.
//
// When + is used with strings, it performs concatenation,
// meaning it joins the strings together.
// ----------------------------------------------------------

let str1 = "aryan";
let str2 = "upadhyay";

console.log(str1 + str2); // ary anupadhyay

// String + Number results in a string because JavaScript
// converts the number to a string.

let str3 = "aryan";
let str4 = 10;

console.log(str3 + str4); // aryan10


// ==========================================================
// 2. ASSIGNMENT OPERATORS
// ==========================================================
//
// Assignment operators are used to assign or update values
// stored in variables.
//
// =    Assignment
// +=   Add and assign
// -=   Subtract and assign
// *=   Multiply and assign
// /=   Divide and assign
// %=   Modulus and assign
// **=  Exponentiation and assign
//
// ==========================================================

let x = 10;

x += 5;   // Same as: x = x + 5
console.log(x); // 15

x -= 3;   // Same as: x = x - 3
console.log(x); // 12

x *= 2;   // Same as: x = x * 2
console.log(x); // 24

x /= 4;   // Same as: x = x / 4
console.log(x); // 6

x %= 4;   // Same as: x = x % 4
console.log(x); // 2

x **= 3;  // Same as: x = x ** 3
console.log(x); // 8


// ==========================================================
// 3. COMPARISON OPERATORS
// ==========================================================
//
// Comparison operators compare two values.
//
// The result of a comparison is always a Boolean:
// true or false.
//
// ==    Equal (allows type conversion)
// !=    Not equal (allows type conversion)
// ===   Strict equal (value AND type)
// !==   Strict not equal
// >     Greater than
// <     Less than
// >=    Greater than or equal
// <=    Less than or equal
//
// ==========================================================

let p = 10;
let q = 5;

console.log(p == q);   // false
console.log(p != q);   // true

console.log(p === q);  // false
console.log(p !== q);  // true

console.log(p > q);    // true
console.log(p < q);    // false

console.log(p >= q);   // true
console.log(p <= q);   // false


// ----------------------------------------------------------
// == vs ===
//
// == performs type conversion before comparison.
//
// === does NOT perform type conversion.
// It checks both value and type.
//
// In modern JavaScript, prefer === and !==.
// ----------------------------------------------------------

console.log(5 == "5");   // true
console.log(5 === "5");  // false


// ==========================================================
// 4. LOGICAL OPERATORS
// ==========================================================
//
// Logical operators are mainly used to combine conditions.
//
// &&   AND
// ||   OR
// !    NOT
//
// AND:
// Both conditions must be true.
//
// OR:
// At least one condition must be true.
//
// NOT:
// Reverses true to false and false to true.
//
// ==========================================================

let age = 22;
let hasID = true;


// AND
console.log(age >= 18 && hasID); // true


// OR
console.log(age < 18 || hasID); // true


// NOT
console.log(!hasID); // false


// ==========================================================
// 5. UNARY OPERATORS
// ==========================================================
//
// A unary operator works on ONE operand/value.
//
// Example:
//
//     -10
//
// Here:
// -  = unary operator
// 10 = operand
//
// Important unary operators:
//
// +      Unary plus
// -      Unary minus
// ++     Increment
// --     Decrement
// !      Logical NOT
// typeof Type checking
// void   Returns undefined
// delete Deletes an object property
//
// ==========================================================


// ----------------------------------------------------------
// Unary Plus (+)
//
// Converts a value into a number when possible.
// ----------------------------------------------------------

let value1 = "10";

console.log(+value1); // 10
console.log(typeof +value1); // number


// ----------------------------------------------------------
// Unary Minus (-)
//
// Converts the value to a number and makes it negative.
// ----------------------------------------------------------

let value2 = "10";

console.log(-value2); // -10


// ----------------------------------------------------------
// Logical NOT (!)
//
// Converts a value to Boolean and reverses it.
//
// true  -> false
// false -> true
// ----------------------------------------------------------

let isLoggedIn = true;

console.log(!isLoggedIn); // false


// ----------------------------------------------------------
// typeof
//
// Returns the type of a value as a string.
// ----------------------------------------------------------

let myNumber = 100;

console.log(typeof myNumber); // number


// ----------------------------------------------------------
// delete
//
// Deletes a property from an object.
// ----------------------------------------------------------

let student = {
    name: "Aryan",
    age: 22
};

delete student.age;

console.log(student); // { name: "Aryan" }


// ==========================================================
// 6. INCREMENT / DECREMENT OPERATORS
// ==========================================================
//
// ++ increases a value by 1.
// -- decreases a value by 1.
//
// There are two forms:
//
// Prefix:
// ++x
//
// Postfix:
// x++
//
// The difference matters when the value is being used
// in the same expression.
//
// ==========================================================

let count = 5;

count++;

console.log(count); // 6

count--;

console.log(count); // 5


// ----------------------------------------------------------
// PRE-INCREMENT
//
// ++pre increases the value FIRST and then returns it.
// ----------------------------------------------------------

let pre = 5;

console.log(++pre); // 6
console.log(pre);   // 6


// ----------------------------------------------------------
// POST-INCREMENT
//
// post++ returns the value FIRST and then increases it.
// ----------------------------------------------------------

let post = 5;

console.log(post++); // 5
console.log(post);   // 6


// ==========================================================
// 7. TERNARY OPERATOR
// ==========================================================
//
// The ternary operator is a short way of writing a simple
// if-else condition.
//
// Syntax:
//
// condition ? valueIfTrue : valueIfFalse
//
// It is called "ternary" because it works with three parts:
// 1. Condition
// 2. Value if true
// 3. Value if false
//
// ==========================================================

let userAge = 20;

let result = userAge >= 18 ? "Adult" : "Minor";

console.log(result); // Adult


// Equivalent if-else:
//
// if (userAge >= 18) {
//     result = "Adult";
// } else {
//     result = "Minor";
// }


// ==========================================================
// 8. NULLISH COALESCING OPERATOR (??)
// ==========================================================
//
// ?? checks whether the left side is null or undefined.
//
// If left side is null or undefined:
//     return right side
//
// Otherwise:
//     return left side
//
// ==========================================================

let username = null;

console.log(username ?? "Guest"); // Guest

let name = "Aryan";

console.log(name ?? "Guest"); // Aryan


// Important:
// ?? only considers null and undefined as missing.
//
// 0, false, and "" are NOT considered nullish.

console.log(0 ?? 100);      // 0
console.log(false ?? true); // false
console.log("" ?? "Guest"); // ""


// ==========================================================
// 9. OPTIONAL CHAINING OPERATOR (?.)
// ==========================================================
//
// Optional chaining allows you to safely access properties
// that may not exist.
//
// Without optional chaining, accessing a property of
// undefined/null can cause an error.
//
// ==========================================================

let user = {
    name: "Aryan",
    address: {
        city: "Panipat"
    }
};

console.log(user?.name);          // Aryan
console.log(user?.address?.city); // Panipat
console.log(user?.phone?.number); // undefined


// ==========================================================
// 10. STRING OPERATORS
// ==========================================================
//
// The + operator can concatenate (join) strings.
//
// += can also be used to add more text to a string.
//
// ==========================================================

let firstName = "Aryan";
let lastName = "Upadhyay";

console.log(firstName + " " + lastName);
// Aryan Upadhyay


let greeting = "Hello";

greeting += " Aryan";

console.log(greeting);
// Hello Aryan


// ==========================================================
// 11. TYPE OPERATORS
// ==========================================================
//
// JavaScript provides operators for checking types.
//
// typeof
// instanceof
//
// typeof returns the type of a value.
//
// instanceof checks whether an object belongs to a
// particular class/constructor.
// ==========================================================

let number = 100;
let text = "Hello";
let numbers = [1, 2, 3];

console.log(typeof number);  // number
console.log(typeof text);    // string
console.log(typeof numbers); // object


// instanceof

console.log(numbers instanceof Array); // true


// ==========================================================
// 12. BITWISE OPERATORS
// ==========================================================
//
// Bitwise operators work on the binary representation
// of numbers.
//
// They are less important for beginner React development,
// but are useful to know.
//
// &   Bitwise AND
// |   Bitwise OR
// ^   Bitwise XOR
// ~   Bitwise NOT
// <<  Left shift
// >>  Right shift
//
// ==========================================================

let m = 5; // Binary: 0101
let n = 3; // Binary: 0011

console.log(m & n);  // AND: 1
console.log(m | n);  // OR: 7
console.log(m ^ n);  // XOR: 6
console.log(~m);     // NOT: -6

console.log(m << 1); // Left shift: 10
console.log(m >> 1); // Right shift: 2


// ==========================================================
// 13. OPERATOR PRECEDENCE
// ==========================================================
//
// Operator precedence determines which operation happens
// first when an expression contains multiple operators.
//
// Example:
//
// 10 + 5 * 2
//
// Multiplication (*) has higher precedence than addition (+),
// so:
//
// 5 * 2 = 10
// 10 + 10 = 20
//
// ==========================================================

let answer = 10 + 5 * 2;

console.log(answer); // 20


// Parentheses have higher precedence and are evaluated first.

let answer2 = (10 + 5) * 2;

console.log(answer2); // 30


// ==========================================================
// QUICK SUMMARY
// ==========================================================
//
// Arithmetic:
// +  -  *  /  %  **
//
// Assignment:
// =  +=  -=  *=  /=  %=  **=
//
// Comparison:
// ==  !=  ===  !==  >  <  >=  <=
//
// Logical:
// &&  ||  !
//
// Unary:
// +  -  !  typeof  delete  void
//
// Increment / Decrement:
// ++  --
//
// Ternary:
// ?:
//
// Nullish:
// ??
//
// Optional Chaining:
// ?.
//
// Type:
// typeof  instanceof
//
// Bitwise:
// &  |  ^  ~  <<  >>
//
// ==========================================================