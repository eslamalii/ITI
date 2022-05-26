var slides = document.getElementsByClassName("img");

var slideIndex = 1;
showImage(slideIndex);

function next(n) {
  showImage((slideIndex += n));
}

function showImage(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[slideIndex - 1].classList.add("active");
}
var interval = null;
function play() {
  if (!interval) {
    interval = setInterval(() => {
      showImage((slideIndex += 1));
    }, 1000);
  }
}

function stopSlides() {
  clearInterval(interval);
  interval = null;
}
