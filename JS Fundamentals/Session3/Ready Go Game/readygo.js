var stopC = document.getElementById("stop");
var steadyC = document.getElementById("steady");
var goC = document.getElementById("go");
var sign = document.getElementsByClassName("sign")[0];

console.log(sign);
var defultColor = "#bbb";

setTimeout(() => {
  stopC.style.background = "red";
  steadyC.style.background = defultColor;
  goC.style.background = defultColor;
  sign.style.color = "red";
  sign.textContent = "Stop";
}, 2000);

setTimeout(() => {
  stopC.style.background = defultColor;
  steadyC.style.background = "yellow";
  goC.style.background = defultColor;
  sign.style.color = "yellow";
  sign.textContent = "Steady";
}, 4000);

setTimeout(() => {
  stopC.style.background = defultColor;
  steadyC.style.background = defultColor;
  goC.style.background = "green";
  sign.style.color = "green";
  sign.textContent = "Go";
}, 7000);
