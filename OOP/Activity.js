

class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;

    }
    calculateArea() {
        throw new Error("Method not implemented.");
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height);
    }
    displayFormula() {
        console.log(`width*height = area of a rectangle`);
    }
    calculateArea() {
        return this.width*this.height;
    }
}

const shape1 = new Rectangle(3,7);
shape1.displayFormula();
console.log(shape1.calculateArea());








