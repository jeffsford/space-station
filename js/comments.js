'use strict';

var commentForm = document.getElementsByTagName('form')[1];

function addPost (event) {
  event.preventDefault();
  var userName = event.target.namefield.value;
  var userComment = event.target.textfield.value;
  var messageBoard = document.getElementById('messageboard');
  var nameTag = document.createElement('h4');
  nameTag.innerText = userName;
  var commentTag = document.createElement('p');
  commentTag.innerText = userComment;
  messageBoard.appendChild(nameTag);
  messageBoard.appendChild(commentTag);
};
commentForm.addEventListener('submit', addPost);
