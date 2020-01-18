'use strict';

console.log('Quiz');

var enterName = prompt('Hello! What is your name?');

var userWantsToReadBio = prompt('Thank you! ' + enterName + ', Ready to read Bio and take a short quiz?');

if (userWantsToReadBio.toLowerCase() === 'yes') {
  alert('Awesome, Lets Start');
} else if (userWantsToReadBio === 'no') {
  alert('Please exit the Bio');
} else {
  alert('Something went wrong! Try again');
}

var questionOne = prompt('Did Richard join the Army in 1997?');

if (questionOne.toLowerCase() === 'yes') {
  alert('That is correct!');
} else if (questionOne === 'no') {
  alert('Incorrect! Try again');
} else {
  alert('Please try again!');
}

var questionTwo = prompt('Does Richard have three daughters?');

if (questionTwo.toLowerCase() === 'yes') {
  alert('That is correct!');
} else if (questionTwo === 'no') {
  alert('Incorrect! Try again');
} else {
  alert('Please try again!');
}

var questionThree = prompt('Is Richard married?');

if (questionThree.toLowerCase() === 'yes') {
  alert('That is correct!');
} else if (questionThree === 'no') {
  alert('Incorrect! Try again');
} else {
  alert('Please try again!');
}
var questionFour = prompt('Does Richard only have one son?');

if (questionFour.toLowerCase() === 'yes') {
  alert('That is correct!');
} else if (questionFour === 'no') {
  alert('Incorrect! Try again');
} else {
  alert('Please try again!');
}
var questionFive = prompt('Was Richard commissioned as a Officer?');

if (questionFive.toLowerCase() === 'yes') {
  alert('That is correct!');
} else if (questionFive === 'no') {
  alert('Incorrect! Try again');
} else {
  alert('Please try again!');
}

