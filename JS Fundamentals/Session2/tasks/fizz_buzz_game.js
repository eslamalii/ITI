// Fizz Buzz Game

var number = parseInt(prompt("Enter a number : "));

fizzBuzz(number);

function fizzBuzz(num) {
  if (num % 3 == 0 && num % 5 == 0) {
    document.writeln("<h1>Fizz Buzz</h1>");
  } else if (num % 3 == 0) {
    document.writeln("<h1>Fizz</h1>");
  } else if (num % 5 == 0) {
    document.writeln("<h1>Buzz</h1>");
  } else {
    document.writeln("<h1> Invaild</h1>");
  }
}
