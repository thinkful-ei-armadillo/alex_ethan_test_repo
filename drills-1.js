
const getYearOfBirth = function (age) {

  if (age < 0) {
    throw new Error('Age cannot be negative');
  }

  return new Date().getFullYear() - age;
};

const createGreeting = function (name, age) {

  if ( typeof name !== 'string') {
    throw new TypeError('name must be a string');
  }

  if ( typeof age !== 'number') {
    throw new TypeError('age must be a number');
  }

  const yearOfBirth = getYearOfBirth(age);

  return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth}`;
};


try {
  const greeting = createGreeting('Ethan', '32');
  console.log(greeting);
} catch (err) {
  console.log(err);
}
