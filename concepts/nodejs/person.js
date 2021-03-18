const person = {
  name: "Vinayak Tekade",
  age: 21,
};

// module.exports = person;

// const person = require("./person");

const greet = (e) => {
  console.log(`I'm ${e.name} and I'm ${e.age} years old`);
};

greet(person);
