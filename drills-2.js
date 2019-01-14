'use strict';

function jediName(firstName, lastName) {
  return firstName.slice(0,3)+lastName.slice(0,2);
}

function beyond(num) {
  if (Number.isInfinite(num)) {
    console.log('And beyond');
  } else if (num > 0) {
    console.log('To infinity');
  } else if (num < 0) {
    console.log('To negative infinity');
  } else  {
    console.log('Staying home');
  }
}


const decode = function (cypherText) {

  const dec = function (word) {

    switch (word[0]) {

      case 'a':
        return word[1];
        break;

      case 'b':
        return word[2];
        break;

      case 'c':
        return word[3];
        break;

      case 'd':
        return word[4];
        break;

      default:
        return ' ';
        break;
    }
  };

  return cypherText.split(' ').map(dec).join('');

};


console.log(decode('craft block argon meter bells brown croon droop'));



const getDaysInMonth = function (month, leapYear) {

  let numDays = null;

  switch (month.toLowerCase()) {
    case 'april':
    case 'june':
    case 'september':
    case 'november':
      numDays = 30;
      break;

    case 'february':
      numDays = (leapYear) ? 29 : 28;
      break;

    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
      numDays = 31;
      break;

    default:
      throw new Error('Must provide a valid month');
  }

  return `${month} has ${numDays} days.`;
};




console.log(getDaysInMonth('january', true));
console.log(getDaysInMonth('february', true));
console.log(getDaysInMonth('march', true));
console.log(getDaysInMonth('april', true));
console.log(getDaysInMonth('may', true));
console.log(getDaysInMonth('june', true));
console.log(getDaysInMonth('july', true));
console.log(getDaysInMonth('august', true));
console.log(getDaysInMonth('september', true));
console.log(getDaysInMonth('october', true));
console.log(getDaysInMonth('november', true));
console.log(getDaysInMonth('december', true));
