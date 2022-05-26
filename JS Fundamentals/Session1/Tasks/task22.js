//Task 2.2

var message = prompt("Please write a sentence");
var sensitivity = prompt(
  "Would you prefer to check the sentence with sensitivity? (Yes/No)"
).toLowerCase();

if (sensitivity == "yes") {
  document.writeln(
    `<h1>Your sentence is ${yesSensitivity(message)} Vaild</h1>`
  );
} else {
  document.writeln(`<h1>Your sentence is ${noSensitivity(message)} Vaild</h1>`);
}

function noSensitivity(messg) {
  var replace = /[\W_]/g;
  var lowStr = messg.toLowerCase().replace(replace, "");
  var reverseStr = lowStr.split("").reverse().join("");
  return lowStr === reverseStr;
}

function yesSensitivity(messg) {
  var reverseStr = messg.split("").reverse().join("");
  return messg === reverseStr;
}
