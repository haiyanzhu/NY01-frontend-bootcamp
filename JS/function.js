function greet() {
    console.log("Hello, welcome to functions!")
}
greet();

//
declartion();

//Function Declartions, can call above the declaration;
function declartion() {
    console.log('This is function declartion!');
}

declartion();

//Function expression; //can't be called above the function;
const expression = function expression() {
    console.log('I am a function expression!');
}
expression();

//function parameters;
function greetings(name) {
    console.log(`Hello ${name} !`);
}
greetings('Haiyan');
greetings('Mary')
greetings('Jack')

//with return value; 
function sum(a,b) {
    return a+b;
}
console.log(sum(9,5));


let result = sum(9,9);
console.log(result);

//global scope;
let globalVar = "I am a global variable"

function localScope() {
    let localVar = "I am a local variable";
    console.log(`${globalVar} who is inside the function`);
    console.log(`${localVar} who is inside the function`);
}
console.log(globalVar);
localScope();


//higher-order function; a function inside a function;
function calculate(operation, num1, num2) {
    return operation(num1, num2);
}

function addition(a, b) {
    return a+b;
}
function subtraction(a, b) {
    return a-b;
}

let Sum = calculate(addition, 6,5);
console.log(`the answer to addition is : ${Sum}`);
let Diff = calculate(subtraction, 10, 6);
console.log(`the answer to subtraction is : ${Diff}`);






