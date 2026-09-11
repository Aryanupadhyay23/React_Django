// JavaScript Objects

// Creating an object
let student = {
    name: "Aryan",
    age: 22,
    course: "AI/ML",
    isStudent: true
};

console.log(student);


// Accessing object properties

console.log(student.name);
console.log(student.age);


// Bracket notation

console.log(student["course"]);
console.log(student["isStudent"]);


// Changing a property

student.age = 23;
student.course = "Generative AI";

console.log(student);


// Adding a new property

student.city = "Delhi";

console.log(student);


// Deleting a property

delete student.isStudent;

console.log(student);


// Object with different data types

let user = {
    name: "Aryan",
    age: 22,
    skills: ["Python", "JavaScript", "ML"],
    address: {
        city: "Delhi",
        country: "India"
    }
};

console.log(user);


// Accessing nested objects

console.log(user.address.city);
console.log(user.address.country);


// Accessing array inside an object

console.log(user.skills[0]);
console.log(user.skills[2]);


// Object method

let person = {
    name: "Aryan",

    greet: function() {
        console.log("Hello " + this.name);
    }
};

person.greet();


// "this" refers to the current object

let product = {
    name: "Laptop",
    price: 50000,

    showPrice: function() {
        console.log("Price:", this.price);
    }
};

product.showPrice();


// Checking if a property exists

console.log("name" in student);
console.log("email" in student);


// Object.keys()

console.log(Object.keys(student));


// Object.values()

console.log(Object.values(student));


// Object.entries()

console.log(Object.entries(student));


// Loop through an object

for (let key in student) {
    console.log(key, student[key]);
}


// Nested objects

let company = {
    name: "TechCorp",

    employee: {
        name: "Aryan",
        role: "AI Engineer",

        skills: {
            primary: "Python",
            secondary: "JavaScript"
        }
    }
};

console.log(company.employee.name);
console.log(company.employee.skills.primary);


// Destructuring objects

let car = {
    brand: "Tesla",
    model: "Model 3",
    year: 2026
};

let { brand, model, year } = car;

console.log(brand);
console.log(model);
console.log(year);


// Spread operator with objects

let person1 = {
    name: "Aryan",
    age: 22
};

let person2 = {
    ...person1,
    city: "Delhi"
};

console.log(person2);


// Combining objects

let basicInfo = {
    name: "Aryan",
    age: 22
};

let education = {
    degree: "B.Tech",
    field: "AI/ML"
};

let profile = {
    ...basicInfo,
    ...education
};

console.log(profile);


// Array of objects

let students = [
    {
        name: "Aryan",
        marks: 90
    },
    {
        name: "Rahul",
        marks: 85
    },
    {
        name: "Aman",
        marks: 78
    }
];

console.log(students[0].name);
console.log(students[1].marks);


// Loop through array of objects

for (let student of students) {
    console.log(student.name, student.marks);
}


// map() with objects

let names = students.map(function(student) {
    return student.name;
});

console.log(names);


// filter() with objects

let toppers = students.filter(function(student) {
    return student.marks >= 85;
});

console.log(toppers);