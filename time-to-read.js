<<<<<<< HEAD
function timeToRead() {
  var count = document.getElementById('time-to-read-view').innerHTML.split(' ').length;
  wpm = Math.round(count / 230);
}

function showTime() {
  var body = document.getElementById("body").innerHTML;
  document.getElementById("body").innerHTML = '<div class="float" id="float"></div>' + body;
  document.getElementById("float").innerHTML = wpm +
    (wpm <= 1 ? " Minute" : " Minutes");
}

timeToRead();
showTime();
=======

>>>>>>> d1115e0cc5b4ca0b76aee412fa754851c494d4d5
