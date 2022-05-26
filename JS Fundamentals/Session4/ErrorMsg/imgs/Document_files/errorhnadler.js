var success = document.getElementById("success");
var error = document.getElementById("error");
var screenBox = document.getElementById("screenBox");
var successMsg = document.getElementById("successMsg");
var errorMsg = document.getElementById("errorMsg");

success.addEventListener("click", () => {
  screenBox.classList.toggle("show");
  successMsg.style.display = "block";
  errorMsg.style.display = "none";
});
error.addEventListener("click", () => {
  screenBox.classList.toggle("show");
  errorMsg.style.display = "block";
  successMsg.style.display = "none";
});
