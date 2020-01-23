'use strict';
var score = 0;

alert('Hello! What is your name?');

// will be prompted to enter name

function readBio() {
  var userWantsToReadBio = prompt('Thank you! Ready to read Bio and take a short quiz?');
  if (userWantsToReadBio.toLowerCase() === 'yes') {
    alert('Awesome, Lets Start');
  } else if (userWantsToReadBio === 'no') {
    alert('Please exit');
  } else {
    alert('Something went wrong! Try again');
  }
}
// start of questions

function questionOne() {
  var questO = prompt('Did Richard join the Army in 1997?');
  if (questO.toLowerCase() === 'yes') {
    alert('That is correct!');
  } else if (questO === 'no') {
    alert('Incorrect! Try again');
  } else {
    alert('Please try again!');
  }
}

function questionTwo() {
  var questT = prompt('Does Richard have three daughters?');
  if (questT.toLowerCase() === 'yes') {
    alert('That is correct!');
  } else if (questT === 'no') {
    alert('Incorrect! Try again');
  } else {
    alert('Please try again!');
  }
}

function questionThree() {
  var questThree = prompt('Is Richard married?');
  if (questThree.toLowerCase() === 'yes') {
    alert('That is correct!');
  } else if (questThree === 'no') {
    alert('Incorrect! Try again');
  } else {
    alert('Please try again!');
  }
}

function questionFour() {
  var questFour = prompt('Does Richard only have one son?');
  if (questFour.toLowerCase() === 'yes') {
    alert('That is correct!');
  } else if (questFour === 'no') {
    alert('Incorrect! Try again');
  } else {
    alert('Please try again!');
  }
}

function questionFive() {
  var questFive = prompt('Was Richard commissioned as a Officer?');

  if (questFive.toLowerCase() === 'yes') {
    alert('That is correct!');
  } else if (questFive === 'no') {
    alert('Incorrect! Try again');
  } else {
    alert('Please try again!');
  }
}

readBio();
questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();

function questionSix() {
  var questSix = prompt('Guess a number 1 - 10');

  var guess = '7';
  for (var i = 0; i < 4; i++) {
    if (questSix === guess) {
      alert('You are correct!');

      break;

    } else if (questSix < guess) {
      alert('Too High!');

    } else if (questSix > guess) {
      alert('Too Low!');
    } else {
      alert('Someting went wrong!');
    }

  }
}

function questionSeven() {
  var questSeven = prompt('What are the best shoes for running?');
  var shoes = ['Nike', 'Adidas', 'Reebok', 'Brooks',];

  for (var i = 0; i < 6; i++) {

    if (questSeven === shoes[0]) {
      alert('You are correct!');
      alert(score++);
      break;

    } else if (questSeven === shoes[1]) {
      alert('Yes you are correct!');
      alert(score++);
      break;

    } else if (questSeven === shoes[2]) {
      alert('Correct!');
      alert(score++);
      break;

    } else if (questSeven === shoes[3]) {
      alert('Good Job, Correct!');
      alert(score++);
      break;
    }
    else (questSeven !== shoes);
    alert('Try again!');
  }
}

alert(score);

questionSix();
questionSeven();
