console.log("Hello OOP!");
//Polymorphism

class Animal {
    makeSound() {
        return 'The animal makes a noise.'
    }
}

class Dog extends Animal {
    makeSound() {
        return ', the dog barks.';
    }
}

const myDog1 = new Animal();
const myDog = new Dog();
console.log(myDog1.makeSound());
console.log(myDog.makeSound());


class Cat extends Animal {
    makeSound() {
        return ', the cat Meoowwws.';
    }
}

// const d = new Dog();
// console.log(d.makeSound());
const c = new Cat();
console.log(c.makeSound());
