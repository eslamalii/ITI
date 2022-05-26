/********** CIRCLE **********/

// var radiusC;
// while (true) {
//   radiusC = parseInt(prompt("What is the value of your circle raduis "));

//   if (!isNaN(radiusC)) break;
// }

// document.write(`<h1>A≈ ${circle(radiusC)}</h1>`);

// function circle(radius) {
//   return (Math.PI * radius * radius).toFixed(2);
// }

/********** SQUARE **********/

// var squareS;
// while (true) {
//   squareS = parseInt(
//     prompt("What is the value you want to calculate its square root")
//   );
//   if (!isNaN(squareS)) break;
// }

// document.write(`<h1> square root of ${squareS} is ${square(squareS)}</h1>`);

// function square(s) {
//   return Math.sqrt(s).toFixed(2);
// }

/********** COS **********/

var cosS;
while (true) {
  cosS = parseInt(
    prompt("What is the angle you want to calculate its cos value ")
  );
  if (!isNaN(cosS)) break;
}

document.write(`<h1> cos ${cosS}˚  ${angle(cosS)}</h1>`);

function angle(angle) {
  return Math.cos((angle * Math.PI) / 180).toFixed(4);
}
