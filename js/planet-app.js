'use strict';
function linkFunc() {
  document.getElementById("pageLinks").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.linkbtn')) {
    var links = document.getElementsByClassName("link-contents");
    for (var i = 0; i < dropdowns.length; i++) {
      var linkDropDown = links[i];
      if (linkDropDown.classList.contains('show')) {
        linkDropDown.classList.remove('show');
      }
    }
  }
}
