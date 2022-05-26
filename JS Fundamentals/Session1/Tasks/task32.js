var array = [];
while (true) {
  var num = parseInt(prompt("Enter a number : "));

  if (isNaN(num)) continue;

  array.push(num);

  if (array.length === 5) break;
}

document.writeln("<h1>Sorting</h1> <hr>");

document.write(
  `<span style="font-size:24px; color:red"> You've entered the values of </span> <span style="font-size:24px;">${array.join(
    " , "
  )}</span> <br>`
);

document.writeln(
  `<span style="font-size:24px; color:red"> Your values after being sorted descending </span> <span style="font-size:24px;"> ${array
    .sort((a, b) => b - a)
    .join(", ")}</span><br>`
);

document.writeln(
  `<span style="font-size:24px; color:red"> Your values after being sorted ascending </span> <span style="font-size:24px;"> ${array
    .sort((a, b) => a - b)
    .join(", ")}</span>`
);
