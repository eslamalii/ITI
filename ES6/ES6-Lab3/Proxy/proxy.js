// Proxy
let handler = {
  set(obj, prop, value) {
    if (prop === "name") {
      if (typeof value !== "string" || value.length !== 7)
        throw new Error("Name must be 7 characters");
    }

    if (prop === "address") {
      if (typeof address !== "string")
        throw new Error("Address must be a string");
    }

    if (prop === "age") {
      if (value > 60 || value < 25)
        throw new Error("Age must be between 25 and 60");
    }

    obj[prop] = value;
    return true;
  },
};

const proxy = new Proxy({}, handler);

// proxy.name = "ees";
// proxy.address = 23;
// proxy.age = 70;
