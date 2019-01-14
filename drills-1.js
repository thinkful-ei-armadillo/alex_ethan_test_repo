
const getYearOfBirth = function (age) {

  return new Date().getFullYear() - age;
};

const createGreeting = function (name, age) {

  const yearOfBirth = getYearOfBirth(age);

  return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth}`;
};


const greeting = createGreeting('Ethan', 32);

console.log(greeting);
