//Task1 Use an arrow functions to calculate the square of a given number and log the result to console;
const Square = (num)=>{
    return num*num;
}
console.log("Task1 : calling the arrow function to compute the square with the result : ",Square(5));

//Task2 template literals to create a welcome message that includes the name and age of a person;
const person1 = {
    firstName: "Haiyan",
    lastName: "Zhu",
    age: 35
}

console.log(`Task2: Welcome, my name is ${person1.firstName} and my age is ${person1.age}` );

//Task 3 Use destructuring to extract the first and last name from a person object and log them to the console;
//pay attention to, the destructured fields must be the same name as fields that object have; 
const {firstName, lastName} = person1;
console.log("Task 3: destructuring the first and last name : ", firstName, lastName);
//Task4 : Use the spread operator to merge two arrays into a single array;

//Spread
const firstarray = [1, 2];
const secondarray = [3, 4];
const all = [...firstarray, ...secondarray];
console.log("Task 4: the merged array is : ", all);

//Task5 : Use default parameters to create a function that calculates the area of a rectangle
function calculateArea(width=0, height=0) {
    return width*height;
}
console.log("Task 5: calling calculateArea with using default parameters : ", calculateArea());

//Task6: Create a class called "Person" with properties for name and age, and a method to introduce the person. instantiate an object of the class and call the introduct method;

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    introduce() {
      console.log(`Task 6: Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }

const instancePerson = new Person('Haiyan', 35);
instancePerson.introduce();

console.log('The end of Tasks!')