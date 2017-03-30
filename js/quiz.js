'use strict';

function submitAnswers(e) {

  e.preventDefault();

  var total = 5;
  var score = 0;

  var q1 = document.forms['qForm']['q1'].value;
  var q2 = document.forms['qForm']['q2'].value;
  var q3 = document.forms['qForm']['q3'].value;
  var q4 = document.forms['qForm']['q4'].value;
  var q5 = document.forms['qForm']['q5'].value;
  var qArray = [q1, q2, q3, q4, q5];

  for (var i = 0; i < qArray.length; i++) {
    if (qArray[i] === null || qArray[i] === '') {
      alert('You forgot to fill out question ' + [i + 1]);
      return false;
    }
  }

  var answers = ['a', 'b', 'b', 'c', 'a'];

  for (var i = 0; i < qArray.length; i++) {
    if (qArray[i] === answers[i]) {
      score++;
    }
  }

  var results = document.getElementById('results');
  results.innerHTML = 'Nice job, you scored ' + score + ' out of ' + total + '.';
  return false;

};

var qForm = document.getElementById('qForm');
qForm.addEventListener('submit', submitAnswers, false);
