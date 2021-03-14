// const name = "Vinayak";
// const age = "21";
// const weight = "75.5";
// const isCool = true;
// const problems = null;
// let x;
// const y = undefined;
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof weight);
// console.log(typeof isCool);
// console.log(typeof problems);
// console.log(typeof x);

// const name = "Vinayak";
// const age = "21";
// // Concatenation
// console.log("My name is " + name + " and I am " + age + " years old");
// // Template String
// console.log(`My name is ${name} and I am ${age}  years old`);

// const greeting = `Hello Everyone!`;
// console.log(greeting.length);
// console.log(greeting.toUpperCase());
// console.log(greeting.toLowerCase());
// console.log(greeting.substring(0, 5));
// console.log(greeting.substring(0, 8).toUpperCase());

// const tag = "technology, computers, code";
// console.log(tag.split(", "));

// const colors = ["red", "green", "blue", "yellow"];
// colors.push("violet");
// console.log(colors);

// colors.unshift("magenta");
// console.log(colors);

// colors.pop();
// console.log(colors);

// console.log(colors.indexOf("green"));

// const person = {
//   fName: "Sherlock",
//   lName: "Holmes",
//   age: 60,
//   hobbies: ["Music", "Movies", "Games"],
//   address: {
//     house: "222B",
//     street: "Baker street",
//     city: "London",
//   },
// };

// console.log(person);
// console.log(person.fName);
// console.log(person.hobbies[2]);
// console.log(person.address.street);

// const colors = ["red", "green", "blue", "yellow"];
// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// const x = 200;
// if (x === 20) {
//   console.log("x is 2");
// } else if (x > 100) {
//   console.log("x is 100");
// } else if (x < 100) {
//   console.log("x is not 2");
// }

// const colors = ["red", "green", "blue", "yellow"];
// colors.forEach((color) => {
//   console.log(color);
// });

// const colors = ["red", "green", "blue", "yellow"];
// const upperCaseColors = colors.map((color) => {
//   return color.toUpperCase();
// });

// console.log(upperCaseColors);
const colors = ["red", "green", "blue", "yellow"];
const hasLetterL = colors.filter((color) => {
  return color.includes("l");
});
console.log(hasLetterL);
