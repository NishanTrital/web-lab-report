var   name    = "Alice";    // OLD style — generally avoid var (function-scoped, hoisted)
let   age     = 20;         // MODERN approach — block-scoped, can be updated
const country = "Nepal";    // CONSTANT — block-scoped, cannot be reassigned

console.log("--- 1. Variables ---");
console.log("Name:", name);
console.log("Age:", age);
console.log("Country:", country);

// let allows reassignment
age = 21;
console.log("Updated age:", age);


//functions
const A = ()=>{ 
    console.log("This is function A")
    B()
}

const B = ()=>{
    console.log("This is function B")
    C()
}

const C = ()=>{
    console.log("This is function C")
    
   
}

A()

console.log("\n--- 2. Traditional Functions ---");

// Function declaration
function greet(personName) {
  return "Hello, " + personName + "!";
}

// Function expression (assigned to a variable)
const add = function(a, b) {
  return a + b;
};

console.log(greet("Bob"));
console.log("2 + 3 =", add(2, 3));


//Arrow function 
const fruits = ['apple', 'banana','mango'];

console.log(fruits);

for(const fruit of fruits)
    console.log(fruit);

const displayOdd = (fruits) => {
    for(let i = 0; i < fruits.length; i++){
        if(i % 2 !== 0)   // odd indices
            console.log(fruits[i]);
    }
}

displayOdd(fruits); 

//Filter Usage- Array bata elements haru condition anushar filter garera diney
numbers=[1,2,3,34,55,23,21]
numbers.filter((e)=>{
   if(e>20)
    console.log(e)
})
dta = numbers.filter(i => i<20)
console.log(dta)

fruits.filter ((e , i)=>{
    if(i%2 ==0){
       console.log(e)
    }
})
//spread Operator

console.log(...fruits, ...numbers)


//  OBJECTS

console.log("\n--- 4. Objects ---");

// Objects store related properties and methods together
const student = {
  name:    "Sita",
  age:     19,
  college: "TU",
  isActive: true,
  
  // Method inside object
  introduce: function() {
    return `I am ${this.name} and I am ${this.age} years old`;
  }
};

// Access properties using dot notation
console.log("Student name:", student.name);
console.log("Student age:", student.age);
console.log(student.introduce());

// Modify a property
student.age = 20;
console.log("Updated age:", student.age);

// Add a new property
student.gpa = 3.8;
console.log("Added GPA:", student.gpa);

// Destructuring: pull values into variables
const { name: sName, college } = student;
console.log("Destructured:", sName, "from", college);



// 5. ARRAYS + MAP


console.log("\n--- 5. Arrays + map() ---");

const numbers = [1, 2, 3, 4, 5];

// map() — applies a transformation and returns a new array
const squared = numbers.map(n => n * n);
const doubled = numbers.map(n => n * 2);

console.log("Original:", numbers);
console.log("Squared:", squared);
console.log("Doubled:", doubled);

// map with array of objects
const students = [
  { name: "Ram",   score: 85 },
  { name: "Shyam", score: 72 },
  { name: "Hari",  score: 91 },
];

const names = students.map(s => s.name);
const grades = students.map(s => ({
  name: s.name,
  grade: s.score >= 80 ? "A" : "B"
}));

console.log("Student names:", names);
console.log("Grades:", grades);