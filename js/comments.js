'use strict';

var commentForm = document.getElementsByTagName('form')[1];
var lsNames = [];
var lsComments = [];

function addPost (event) {
  event.preventDefault();
  var userName = event.target.namefield.value;
  var userComment = event.target.textfield.value;
  var messageBoard = document.getElementById('messageboard');
  var nameTag = document.createElement('h4');
  nameTag.className = 'username-header';
  messageBoard.prepend(nameTag);
  nameTag.innerText = (' -' + userName);
  lsNames.push(' -' + userName);
  localStorage.setItem('nameTag', JSON.stringify(lsNames));
  var commentTag = document.createElement('p');
  commentTag.className = 'usercomment';
  messageBoard.prepend(commentTag);
  commentTag.innerText = ('"' + userComment + '"');
  lsComments.push('"' + userComment + '"');
  localStorage.setItem('commentTag', JSON.stringify(lsComments));
  commentForm.reset();
};
commentForm.addEventListener('submit', addPost);

if (localStorage.nameTag) {
  lsNames = JSON.parse(localStorage['nameTag']);
}

if (localStorage.commentTag) {
  lsComments = JSON.parse(localStorage['commentTag']);
}
function createComment(){
  var messageBoard = document.getElementById('messageboard');
  for (var i = 0; i < lsNames.length; i++){
    var commentNewH4 = document.createElement('h4');
    messageBoard.prepend(commentNewH4);
    commentNewH4.className = 'username-header';
    commentNewH4.innerText = lsNames[i];
    var commentNewP = document.createElement('p');
    messageBoard.prepend(commentNewP);
    commentNewP.className = 'usercomment';
    commentNewP.innerText = lsComments[i];
  }
};

createComment();
