// Task 1.2

var sum = 0;

while (true) {
  var nums = parseInt(prompt("Please enter a number."));

  if (isNaN(nums)) continue;

  if (nums != 0) {
    sum += nums;
  }

  if (sum > 100 || nums == 0) {
    document.writeln(`<h1> Your sum is ${sum}</h1>`);
    break;
  }
}
