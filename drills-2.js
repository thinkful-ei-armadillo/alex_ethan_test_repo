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

beyond(5);