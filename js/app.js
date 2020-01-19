'use strict';
var score = 0;

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


for(var i = 0; i < 4; i++){
  var questionSix = prompt ('Guess a number 1 - 10');
  var guess = '7';
  if (questionSix === guess){
    alert('You are correct!');

    break;

  } else if (questionSix < guess) {
    alert('Too High!');

  } else if (questionSix > guess) {
    alert('Too Low!');
  } else {
    alert('Someting went wrong!');
  }

}

if(questionSix !=7) {
  alert('The correct answer 7');
}



for(var i = 0; i < 6; i++){
  var questionSeven = prompt('What are the best shoes for running?');
  var shoes = ['Nike','Adidas','Reebok','Brooks',];

  if(questionSeven === shoes[0]){
    alert('You are correct!');
    alert(score++);
    break;

  }else if(questionSeven === shoes[1]){
    alert('Yes you are correct!');
    alert(score++);
    break;

  } else if(questionSeven === shoes[2]){
    alert('Correct!');
    alert(score++);
    break;
  } else if(questionSeven === shoes[3]){
    alert('Good Job, Correct!');
    alert(score++);
    break;
  }
  else (questionSix !== shoes);
  alert('Try again!');
}

alert('The correct answer is' + Nike);
alert(score);
