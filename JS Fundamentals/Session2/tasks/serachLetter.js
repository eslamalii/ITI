while (true) {
  var msg = prompt("Enter a sentence: ").toLowerCase();

  if (!isNaN(msg)) continue;

  var char = prompt("Enter a letter: ").toLowerCase();

  if (!isNaN(char)) continue;

  var arry = [];
  for (let i = 0; i < msg.length; i++) {
    if (char === msg[i]) {
      arry.push(i);
    }
  }
  document.writeln(`<h1>${char} = ${arry.join(", ")}</h1>`);
  break;
}
