'use strict';

function submitAnswers(e) {

  e.preventDefault();

  var total = 5;
  var score = 0;

    //get user input
  var q1 = document.forms['quizForm']['q1'].value;
  var q2 = document.forms['quizForm']['q2'].value;
  var q3 = document.forms['quizForm']['q3'].value;
  var q4 = document.forms['quizForm']['q4'].value;
  var q5 = document.forms['quizForm']['q5'].value;

  var qArray = [q1, q2, q3, q4, q5];

    //reminds user to select each button if left unselected
  for (var i = 0; i < qArray.length; i++) {
    if (qArray[i] === null || qArray[i] === '') {
      alert('You forgot to fill out question ' + [i + 1]);
      return false;
    }
  }

    //set correct answers
  var answers = ['a', 'b', 'b', 'c', 'a'];

    //check answers
  for (var i = 0; i < qArray.length; i++) {
    if (qArray[i] === answers[i]) {
      score++;
    }
  }
    //display results
  var results = document.getElementById('results');
  results.innerHTML = 'You scored ' + score + ' out of ' + total;
  return false;

};

var qForm = document.getElementById('qForm');
qForm.addEventListener('submit', submitAnswers, false);
