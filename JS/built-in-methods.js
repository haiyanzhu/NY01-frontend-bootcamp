//Morden JS feature

function greet() {
    console.log('Hello.');
}

//Arrow Functions;
const greeting = ()=>{
    console.log('Hello');
}
const square = (a) => a*a;
console.log(square(5));

//Enhanced Object Literals;
const person = {

	name: "TJ",

	age: 21,
    
    greeting() {

    }

}

//Spread and Rest Operators;
//Rest
function myFunction(firstArg, ...restofArgs) {
    console.log(firstArg);
    console.log(restofArgs);
}

myFunction('one', 'two', 'three', 'four');

//Spread
function sum(x, y, z) {
    return x+y+z;
}
const numbers = [1,2,3];
console.log(sum(...numbers));

//common built-in methods
//Arrays
//Filter
let num = [1,2,3,4,5,6,7,8,9,10];
const even = num.filter((number)=> number%2==0);
console.log(even);

const odd = num.filter((number)=> number%2==1);
console.log(odd);

//Strings
//split the string into an array of strings;
const message = "Hello, World!";
const words = message.split(', ');
console.log(words);

//includes
const sentence = "The quick brown fox jumps over the lazy dog.";
const contain = sentence.includes('cat');
console.log(contain);

//length;
const sampleString="Welcome to Modern JS features!";
const len = sampleString.length;
console.log(len);

//Objects;
//keys;
const keys = Object.keys(person);
console.log(keys);

//values;
const values = Object.values(person);
console.log(values);
console.log(person);

//math;
//max and min;
console.log(Math.max(10,5,20));
console.log(Math.min(10,5,20));

//rounding
console.log(Math.round(3.6));

//flour;
console.log(Math.floor(3.6));
console.log(Math.ceil(3.1));

//random;
console.log(Math.random());

//Nested math methods;
console.log(Math.round(Math.random()*100));

//Other Methods;
//to fixed;
const pi = 3.141592;
console.log(pi.toFixed(2));

const currentDate = new Date();
console.log(currentDate);

const christmas = new Date(2024, 11, 25);
console.log(christmas);

//toString
const numString = 38;
console.log(numString.toString()+1);