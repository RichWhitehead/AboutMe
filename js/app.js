'use strict';
var score = 0;

console.log('Quiz');
var enterN = prompt('Hello! What is your name?');

// will be prompted to enter name

function enterName(){
}

enterName();
console.log ('userentername');

var userWantsToReadBio = prompt('Thank you! ' + enterN + ', Ready to read Bio and take a short quiz?');
console.log('userreadsbio');

if (userWantsToReadBio.toLowerCase() === 'yes') {
  alert('Awesome, Lets Start');
} else if (userWantsToReadBio === 'no') {
  alert('Please exit');
} else {
  alert('Something went wrong! Try again');
}
// start of questions

var questO = prompt('Did Richard join the Army in 1997?');

function questionOne() {
  console.log('question');

}

questO();

if (questionOne.toLowerCase() === 'yes') {
  alert('That is correct!');
} else if (questionOne === 'no') {
  alert('Incorrect! Try again');
} else {
  alert('Please try again!');
}

var questT = prompt('Does Richard have three daughters?');

function questionTwo() {
  console.log('question');

}

questT();

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


for (var i = 0; i < 4; i++){
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

// eslint-disable-next-line eqeqeq
if(questionSix !=7) {
  alert('The correct answer 7');
}



// eslint-disable-next-line no-redeclare
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

// eslint-disable-next-line no-undef
alert('The correct answer is' + Nike);
alert(score);
