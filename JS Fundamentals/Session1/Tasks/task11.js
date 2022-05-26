//Task 1.1

var message = prompt("Please write your meassage to display it.");

document.writeln("<h1>Heading</h1><hr>");
for (var i = 1; i <= 6; i++) {
  if (message) {
    document.writeln(`<h${i}> ${message} </h${i}>`);
  } else {
    document.writeln("<h1> Please refresh to write your message.</h1>");
    break;
  }
}
