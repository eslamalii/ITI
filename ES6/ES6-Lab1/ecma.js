// Swapping (Task 1 )

let x = 5;
let y = 2;

[x, y] = [y, x];

console.log(x);
console.log(y);

// Task 2

// function getMaxValue(...arr) {
//   let max = Math.max(...arr);
//   let min = Math.min(...arr);

//   console.log(`Max: ${max}, Min: ${min}`);
// }

// getMaxValue(1, 2, 3, 23, 424, 4);

// Task 3

let fruits = ["apple", "strawberry", "banana", "orange", "mango"];

// check String
let a = fruits.every((e) => typeof e == "string");

//Elements starts with "a"
let b = fruits.some((e) => e.charAt(0) === "a");

//Elements that starts with "b" or "s"
let c = fruits.filter((e) => e.charAt(0) === "b" || e.charAt(0) === "s");

// I like
let d = fruits.map((e) => `I like ${e}`);

// Foreach
d.forEach((e) => console.log(e));
