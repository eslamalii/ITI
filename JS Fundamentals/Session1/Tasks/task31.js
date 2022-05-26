var array = [];

while (true) {
  var num = parseInt(prompt("Enter a number : "));

  if (isNaN(num)) continue;

  array.push(num);

  if (array.length === 3) break;
}

document.writeln(
  "<h1> Adding -- Multiplying -- and dividing 3 values</h1> <hr>"
);

var arraySum = array.join(" + ");
var arrayMul = array.join(" * ");
var arrayDiv = array.join(" / ");

//Sum
var sum = array.reduce((total, currentValue) => (total += currentValue), 0);
//Print Sum
printString(arraySum, sum, "Sum of the 3 values");

//Multiplcation
var mul = array.reduce((total, currentValue) => (total *= currentValue), 1);
//Print Multiplcation
printString(arrayMul, mul, "multioplication of the 3 values");

//Division
var div = array.reduce((total, currentValue, indx) =>
  indx == 0 ? currentValue : (total /= currentValue)
);
//Print Division
printString(arrayDiv, div, "Division of the 3 values ");

function printString(numsString, totalNums, msg) {
  document.writeln(
    `<span style="font-size:24px; color:red">  ${msg} </span> <span style="font-size:24px;">${numsString} = ${totalNums} </span> <br>`
  );
}
