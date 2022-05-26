var obj = {
  name: "Eslam",
  age: 20,
  address: "Cairo",
};

obj[Symbol.iterator] = function () {
  let index = -1;
  let keys = Object.keys(this);
  let values = Object.values(this);
  return {
    next: function () {
      index++;
      return index < keys.length
        ? {
            value: [keys[index], values[index]],
            done: false,
          }
        : { value: undefined, done: true };
    },
  };
};

for (let x of obj) {
  console.log(x);
}
