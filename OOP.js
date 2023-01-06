


// class Animal {
//     constructor(species, age) {
//         this.species = species;
//         this.age = age;
//     }

//     eat() {
//         return `${this.species} is eating`;
//     }
// }

// class Cat extends Animal {
//     constructor(age) {
//         super("mammal", age);
//     }

//     meow() {
//         return "Meoow";
//     }
// }

// const cat = new Cat("mammal", 12);
// console.log(cat.eat());


// class Color {
//     constructor(r, g, b) {
//         this.red = r;
//         this.green = g;
//         this.blue = b;
//     }

//     printColor() {
//         console.log(`rgb(${this.red}, ${this.green}, ${this.blue})`);
//     }
// }

// const newColor = new Color(12, 51, 23);
// newColor.printColor();


// function Jump(jump) {
//     this.jump = jump;
// }

// const doesJump = new Jump(true);
// console.log(doesJump.jump);


// function makeColor(r, g, b) {
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function() {
//         const {r, g, b} = this;
//         return `rgb(${r}, ${g}, ${b})`;
//     }
//     return color;
// }

// const violet = makeColor(12, 12, 12);
// console.log(violet.rgb());










// String.prototype.print = function() {
//     console.log(this.toUpperCase());
// }

// const str = "Yay!";

// str.print();

