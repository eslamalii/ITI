var arr = [
  "Ahmed",
  "Hossam",
  "Sara",
  "Mohesen",
  "Aya",
  "Mostafa",
  "Yasmine",
  "Mohamed",
  "Amira",
  "Noura",
];

randomString(arr);

function randomString(str) {
  var twoNames = [];
  while (twoNames.length != 2) {
    var random = str[Math.floor(Math.random() * arr.length)];
    if (twoNames.includes(random)) continue;
    twoNames.push(random);
  }
  document.writeln(`<h1> ${twoNames.join(", ")}</h1>`);
}
