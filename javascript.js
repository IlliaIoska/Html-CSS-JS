const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

const heading = document.querySelector("h1");
//YOU CODE GOES HERE:
for(let i in colors.length) {
    heading[i].style.color = colors[i];
}




// function greet(name, greeting = "hello") {
//     console.log(`${greeting}, ${name}`);
// }

// greet("John");

// function multiply(numArray) {
//     return numArray.reduce((result, num) => {
//         return result *= num;
//     });

    
// }

// console.log(multiply([1, 2, 3]));

// function allEvens(numArray) {
//     return numArray.every(num => num % 2 === 0);
// }

// console.log(allEvens([2, 4, 6]));


// usernames = ['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan'];

// function validUserNames(usernames) {
//     usernames.filter(userName => {
//         return userName.length < 10;
//     }) 
//   }


// print(validUserNames(usernames));  

// const hey = (name) => {
//     console.log(`Hey, ${name}`);
// }

// hey("John");    

// const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

// let firstNames = fullNames.map(function (el) {
//     return el.first;
// })

// const nums = [1, 2, 3, 4, 5, 6];
// function func(num) {
//     console.log(num ** 2);
// }

// nums.forEach(func);


// try {
//     hello.meow();
// } catch {
//     console.log("Is not defined");
// }

// const hen = {
//     name : "Helen",
//     eggCount : 0,
//     layAnEgg() {
//         this.eggCount++;
//         console.log("EGG");
//     }
// }

// console.log(hen.layAnEgg());
// console.log(hen.eggCount);

// const square = {
//     area(a) {
//         console.log(a ** 2);
//     },
//     perimeter(a, b) {
//         console.log(2 * (a + b));
//     }
// }

// square.area(2);
// square.perimeter(1,2);


// const square = function(x) {
//     return x**2;
// }

// console.log(square(2));

// function getDayOfWeek(num) {
//     if (num <= 0 || num > 7) {
//     return null;
//     } else {
//     switch(num) {
//         case 1:
//             return "Monday";
//         case 2:
//             return "Tuesday";
//         case 3:
//             return "Wednesday";
//         case 4: 
//             return "Thursday";
//         case 5: 
//             return "Friday";
//         case 6:
//             return "Saturday";
//         case 7:
//             return "Sunday";        
        
//     }
//     }   

    
// }


// console.log(getDayOfWeek(6));

// function sum_elements(array) {
//     let sum = 0;
//     for (let i of array) {
//         sum += i;
//     }
//     return sum;
// }

// function capitalize(str) {
//     let st = "";
//     st += str.slice(0, 1).toUpperCase();
//     st += str.slice(1);
//     return st;
// }

// console.log(capitalize("john"));

// function lastElement(array) {
//     if (array.length === 0) {
//         return null;
//     }
//     return array.pop();
// }

// console.log(lastElement([1, 2, 7]));

// const todoList = [];
// let action;
// while(true) {
//     console.log("1. Feed \n2. Play \n3. Print \n4. Quit \n5. Delete");
//     action = prompt("Enter an action");
//     switch(action.toLowerCase()) {
//         case "feed":
//             todoList.push("feed");
//             console.log("Feeding");
//             break;
//         case "play":
//             todoList.push("play");
//             console.log("playing");
//             break;
//         case "print":
//             for (i of todoList) {
//                 console.log(i.to);
//             }
//             break;
//         case "delete":
//             let itemToDelete = prompt("The name of the item you want to delete").toLowerCase();
//             for (i of todoList) {
//                 if (i === itemToDelete) {
//                     todoList.splice(todoList.indexOf(itemToDelete), 1);
//                     console.log(`The item ${itemToDelete} has been removed from the list`);
//                 } else {
//                     console.log("Not that one");
//                 }
//             }
//             break;
//     }
// }

// const obj = {
//     name: "john",
//     secondName: "dough",
//     age: 35
// }

// for (let record in obj) {
//     console.log(`${record}, ${obj[record]}`);
// }


// for (let record of obj) {
//     console.log(record);
// }

// const numbers = [1,2,3,4,5,6,7,8,9]; //DON'T CHANGE THIS LINE PLEASE!

// // WRITE YOUR LOOP BELOW THIS LINE:
// for (number of numbers) {
//     console.log(`${number**2}`);
// }


// let guessNumber;
// const targetNumber = Math.floor((Math.random() * 10) + 1);
// while(guessNumber  !== targetNumber) {
//     guessNumber = parseInt(prompt("Too low"));
//     if(guessNumber < targetNumber) {
//     } else if (guessNumber > targetNumber) {
//         guessNumer = prompt("Too high");
//     } else if (guessNumber === targetNumber) {
//         console.log(`you have got the number. The number = ${guessNumber}`);
//         break;
//     }
// }


// let input = prompt("Your input is: ");
// while(true) {
//     input = prompt(input);
//     if (input === "stop") {
//         break;
//     }
// }

// const list  = [1, 2, 3, 4, 5];

// for (let item = 0; item < list.length; item++) {
//     console.log(`List item ${item + 1} = ${list[item]}`);



    // if (item % 2 === 0) {
    //     console.log(`Even item = ${item}`);
    // } else {
    //     console.log(`Odd item = ${item}`);
    // }
//}


// function splicePlanets() {
//     const planets = ["The moon", "Jupiter", "Mars"];
//     const splicedPlanetes = planets.splice(1, 0, "Jenas"); 
// }

// console.log(splicePlanets()); 
   





// let student_name_list = [];
// function set_student_name_list_size() {
//     let size = prompt("Enter an integer representing the size of the student name list ");
//     set_student_name_list_size.length = size; 
//     return size;
// }
// console.log(set_student_name_list_size);


// set_student_name_list_size();
// function isEven(num) {
//     if (num % 2 === 0) {
//         console.log("Even");
//     } else {
//         console.log("Odd")
//     }
// }

// isEven(3);



// function hasDiscount() {
//     const age = prompt("Enter your age ");
//     if (age < 0) {
//         console.log("Invalid value for age");
//     } else if (age <= 5) {
//         console.log("You have a 30% discount");
//     } else if (age < 10) {
//         console.log("You do not have a discount");
//     }
// }

// hasDiscount();

