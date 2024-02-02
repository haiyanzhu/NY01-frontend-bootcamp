//Object
const person = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 25,
    hobbies:['reading', 'coding', 'hiking'],
    greet: function() {
        console.log('Hello, my name is', this.firstName, '  Nice to meet you! ')
    }
}
//Accessing Object Properities;
console.log(person.lastName);
console.log(person.age);

//Modifying Object Properities;
person.lastName='smith';
console.log(person.lastName);

//Accessing object method;
console.log(person.greet());

//Adding new properties to object;
person.nationnality = 'United States';
console.log(person.nationnality);

//Adding new methods to object;
person.introduce = function(){
    //Template Literals;
    console.log(`I am ${this.firstName} ${this.lastName}. I am ${this.age}`);
};
person.introduce();

//Nesting objects;
const address = {
    street: '123 Main St',
    city: 'New York',
    country: 'USA'
}
person.location = address;
console.log(person.location.street);

console.log('check point!')
//Object Destructuring;


const { firstName, lastName, age } = person;
console.log(firstName, lastName, age);

console.log(person.hobbies);
