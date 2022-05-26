/***** Function C1 ( accepts only 2 paramerters) *****/

// twoParamerters(1, 2);

// function twoParamerters() {
//   if (arguments.length == 2) {
//     document.writeln("<h1>You've entered 2 Parameters</h1>");
//   } else {
//     throw "Please enter 2 Values";
//   }
// }

/***** Function C2 ( Numberes Only) *****/

// var i = 0;
// numsOnly(7);
// numsOnly(3);
// numsOnly(7);
// numsOnly("Numbers Only");
// function numsOnly(n) {
//   if (!isNaN(n)) {
//     i += n;
//     console.log(i);
//   } else {
//     throw "Please enter numbers only";
//   }
// }

/***** Function C3 ( Numberes reversed) *****/

// var arr = [];
// function reversedOne() {
//   for (var i = 0; i < arguments.length; i++) {
//     arr.push(arguments[i]);
//   }
//   arr.reverse();
//   console.log(arr);
// }

// reversedOne(3, 5, 26, 6, 78, 3);

// C3.2

// var arr = [];
// function reversedTwo() {
//   for (var i = 0; i < arguments.length; i++) {
//     arr.unshift(arguments[i]);
//   }
//   console.log(arr);
// }
// reversedTwo(2, 23, 4, 53, 6, 0);
