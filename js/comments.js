'use strict';

var commentForm = document.getElementsByTagName('form')[0];
var messageBoard = document.getElementById('messageboard');

function addPost (event) {
  event.preventDefault();
  var article = document.createElement('article');
  var form = event.target;
  var userName = commentForm.name.value;
  var userComment = commentForm.textarea.value;
  var nameTag = document.createElement('h4');
  nameTag.innerText = userName;
  var commentTag = document.createElement('p');
  commentTag.innerText = userComment;
  commentForm.appendChild(messageBoard);
  messageBoard.appendChild(article);
};
commentForm.addEventListener('submit', addPost);
