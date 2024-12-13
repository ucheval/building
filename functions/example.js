//JAVASCRIPT FUNCTIONS

//In JavaScript, functions are blocks of reusable code designed to perform specific tasks. Functions can take inputs, process them, and return an output. They are fundamental building blocks in JavaScript, allowing developers to write modular, organized, 
//and reusable code.

//example

function greet(name) {
    return `Hello, ${name}!`;
}

//greet is the function name.
name is a parameter (input to the function).
The function returns a greeting string.
Usage
javascript
Copy code
console.log(greet("Alice")); // Output: Hello, Alice!
Function Expression
javascript
Copy code
const greet = function(name) {
    return `Hello, ${name}!`;
};
//Functions can be assigned to variables.
//These are called anonymous functions if no name is given.
//Arrow Function (ES6+)

const greet = (name) => `Hello, ${name}!`;
//Concise syntax.
//For functions with a single expression, the return keyword and braces {} can be omitted.
//2. Parameters and Arguments
//Default Parameters
//You can set default values for parameters:


function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet()); // Output: Hello, Guest!
//Rest Parameters
//Allows passing multiple arguments as an array:

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10
//3. Return Values
//Functions can return values using the return statement:


function add(a, b) {
    return a + b;
}
console.log(add(5, 3)); // Output: 8
//4. Function Scope
//Variables declared inside a function are local to that function and cannot be accessed outside:


function example() {
    let message = "This is local!";
    console.log(message); // Output: This is local!
}
console.log(message); // Error: message is not defined
//5. Types of Functions
//Named Functions: Declared with a name.
//Anonymous Functions: Without a name, often used in function expressions.
//IIFE (Immediately Invoked Function Expression): Runs as soon as it’s defined.

(function() {
    console.log("IIFE executed!");
})();
//Callback Functions: Passed as arguments to other functions.

function process(callback) {
    callback("Processing...");
}
process((message) => console.log(message)); // Output: Processing...


