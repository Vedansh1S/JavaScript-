const { log } = require("node:console");

// Without using class
let rect1 = {
  height: 10,
  width: 20,
};

area1 = rect1.height * rect1.width;
//console.log(area1);
console.log();

// Using class

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  area() {
    console.log(this);
    return this.height * this.width;
  }

  display() {
    console.log("Height: " + this.height + " Width: " + this.width);
  }
}

const rectangle = new Rectangle(1, 100);
const area = rectangle.area();
console.log(area);
rectangle.display();

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Default values in constructor
class Car {
  constructor(make = "Ford", model = "Model T", year = 1920) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

const defaultCar = new Car(); // Uses all defaults
const modernCar = new Car("Tesla", "Model 3", 2024); // Uses all new values
const partialCar = new Car("Honda", "Civic"); // Uses first two, default for year

// console.log(defaultCar); // Car { make: 'Ford', model: 'Model T', year: 1920 }
// console.log(modernCar); // Car { make: 'Tesla', model: 'Model 3', year: 2024 }
// console.log(partialCar); // Car { make: 'Honda', model: 'Civic', year: 1920 }

// Parent Class (Superclass)
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

// Child Class (Subclass)
class Dog extends Animal {
  constructor(name, breed) {
    // 1. Call the parent constructor FIRST to set up 'this.name'
    super(name);

    // 2. Then set the child-specific properties
    this.breed = breed;
  }

  // 3. This method overrides the parent's method
  speak() {
    console.log(`${this.name} (a ${this.breed}) barks.`);
  }
}

const spot = new Dog("Spot", "Golden Retriever");
console.log(spot.speak()); // Output: Spot (a Golden Retriever) barks.
