var imgs = document.getElementsByClassName("img");

var interval;
var n = 0;

startMarvel();

function startMarvel() {
  interval = setInterval(() => {
    for (var i = 0; i < imgs.length; i++) {
      imgs[i].src = "./imgs/off.jpeg";
    }

    imgs[n].src = "./imgs/on.jpeg";

    n++;

    if (n > imgs.length - 1) {
      n = 0;
    }
  }, 500);
}
function hoverImg(i) {
  imgs[i].src = "./imgs/hover.jpeg";
  clearInterval(interval);
}

function outImg() {
  startMarvel();
}
