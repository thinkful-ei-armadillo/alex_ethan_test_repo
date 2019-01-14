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
