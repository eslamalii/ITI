var success = document.getElementById("success");
var error = document.getElementById("error");
var screenBox = document.getElementById("successBox");
var errorBox = document.getElementById("errorBox");

var sAlert = false;
var eAlert = false;

success.addEventListener("click", () => {
  errorBox.classList.remove("show");
  eAlert = false;
  setTimeout(() => {
    if (sAlert == false) {
      screenBox.classList.add("show");
      errorBox.style.display = "none";
      screenBox.style.display = "block";
      sAlert = true;
    }
  }, 1000);
});

error.addEventListener("click", () => {
  screenBox.classList.remove("show");
  sAlert = false;
  setTimeout(() => {
    if (eAlert == false) {
      errorBox.classList.add("show");
      screenBox.style.display = "none";
      errorBox.style.display = "block";
      eAlert = true;
    }
  }, 1000);
});
