//Inheritance;
console.log("Hello OOP")


class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} is eating.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof woof!')
    }
}


const myDog = new Dog("Buddy");
console.log(myDog.bark());
console.log(myDog.eat());
const myAnimal = new Animal("HHH");
console.log(myAnimal.eat());


class Cat extends Animal {
    makeSound() {
        console.log('Meow meow!')
    }
    
}
const myCat = new Cat("bagel");
console.log(myCat.makeSound());
console.log(myCat.eat());