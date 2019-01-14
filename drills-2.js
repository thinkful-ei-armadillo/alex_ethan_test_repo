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

const rockPaperScissors = function(num) {
  const choices = [1,2,3]

  if (!choices.includes(num)) {
    throw new Error(`Please select one of the proper choices: ${choices.join()}`);
  }

  const randomNo = Math.floor(Math.random() * 3) + 1;

  console.log(num,randomNo);

  if (num === randomNo) {
    return "It's a tie";
  }
  if (num === choices.length && randomNo === choices[0]) {
    return "You lost";
  } else {
    return (num > randomNo) ? "You won" : "You lost";
  }
}