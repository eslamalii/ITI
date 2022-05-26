document.addEventListener("DOMContentLoaded", whenReady);
var gender = document.getElementsByClassName("gender");
var selected = document.getElementById("color");
var count = 1;
function whenReady() {
  if (document.cookie !== "") {
    window.location.replace("./info.html");
  }
}

reg.addEventListener("click", () => {
  if (fname.value != "" && age.value > 0) {
    setCookies("username", fname.value);
    setCookies("age", age.value);

    if (gender[0].checked) setCookies("gender", "male");
    else setCookies("gender", "female");

    setCookies("color", selected.value);

    setCookies("count", count);
    window.location.href = "/info.html";
  }
});

function setCookies(key, value) {
  document.cookie = `${key}=${value}`;
}

function getCookies() {
  return document.cookie.split(";");
}
