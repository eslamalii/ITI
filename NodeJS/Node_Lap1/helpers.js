const fs = require("fs");

// Add
function add(obj) {
  const JSON_DATA = fs.readFileSync("./db.json", "utf8");
  const JSON_OBJECTS = JSON.parse(JSON_DATA);
  obj.id =
    JSON_OBJECTS.length != 0 ? JSON_OBJECTS[JSON_OBJECTS.length - 1].id + 1 : 1;
  JSON_OBJECTS.push(obj);
  fs.writeFileSync("./db.json", JSON.stringify(JSON_OBJECTS));
}

// Remove
function remove(id) {
  const JSON_DATA = fs.readFileSync("./db.json", "utf8");
  const JSON_OBJECTS = JSON.parse(JSON_DATA);

  const filtered = JSON_OBJECTS.filter((object) => {
    return object.id != id;
  });

  fs.writeFileSync("./db.json", JSON.stringify(filtered));
  return filtered;
}

// Update
function update(obj) {
  const JSON_DATA = fs.readFileSync("./db.json", "utf8");
  const JSON_OBJECTS = JSON.parse(JSON_DATA);
  JSON_OBJECTS.map((element) => {
    if (element.id == obj.id) {
      element.title = obj.title;
      element.body = obj.body;
      element.isChecked = obj.isChecked;
      fs.writeFileSync("./db.json", JSON.stringify(JSON_OBJECTS));
    }
  });
  return JSON_OBJECTS;
}

function getList(filter) {
  const JSON_DATA = fs.readFileSync("./db.json", "utf8");
  const JSON_OBJECTS = JSON.parse(JSON_DATA);

  const key = Object.keys(filter);
  if (key == "all") {
    return JSON_OBJECTS;
  } else if (key == "checked") {
    return JSON_OBJECTS.filter((obj) => {
      return obj.isChecked == "true";
    });
  } else if (key == "unchecked") {
    return JSON_OBJECTS.filter((obj) => {
      return obj.isChecked == "false";
    });
  }
}

function check(id) {
  const JSON_DATA = fs.readFileSync("./db.json", "utf8");
  const JSON_OBJECTS = JSON.parse(JSON_DATA);

  JSON_OBJECTS.map((element) => {
    if (element.id == id) {
      element.isChecked = "true";
      fs.writeFileSync("./db.json", JSON.stringify(JSON_OBJECTS));
    }
  });
}

function uncheck(id) {
  const JSON_DATA = fs.readFileSync("./db.json", "utf8");
  const JSON_OBJECTS = JSON.parse(JSON_DATA);

  JSON_OBJECTS.map((element) => {
    if (element.id == id) {
      element.isChecked = "false";
      fs.writeFileSync("./db.json", JSON.stringify(JSON_OBJECTS));
    }
  });
}

async function createIfNotExists(path) {
  const exists = await asyncExists(path);
  if (!exists) {
    asyncWrite(path, JSON.stringify([]));
  }
}

function asyncWrite(path, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
      if (!err) return resolve(true);
      reject(err);
    });
  });
}

function asyncExists(path) {
  return new Promise((resolve, reject) => {
    fs.exists(path, (exists) => {
      resolve(exists);
    });
  });
}

// Read File
function asyncReadFile(path, options) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, options, () => {
      resolve(true);
    });
  });
}

function parseOptions(options) {
  const obj = options.reduce((cum, elem, index, arr) => {
    const [key, value] = elem.split("=");
    cum[key] = value;
    return cum;
  }, {});

  return obj;
}

module.exports = {
  add,
  remove,
  update,
  parseOptions,
  createIfNotExists,
  check,
  uncheck,
  getList,
};
