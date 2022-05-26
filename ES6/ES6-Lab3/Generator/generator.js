function* fibonacci(length) {
  let num1 = 0;
  let num2 = 1;
  let nextNum = 1;

  for (let i = 0; i < length; i++) {
    yield num1;
    nextNum = num1 + num2;
    num1 = num2;
    num2 = nextNum;
  }
}

function* fibonacci2(length) {
  let num1 = 0;
  let num2 = 1;
  let nextNum = 1;

  let i = 0;
  while (num1 < length) {
    yield num1;
    nextNum = num1 + num2;
    num1 = num2;
    num2 = nextNum;
    i++;
  }
}
