// node index add title=todo1 body=body1 isChecked=true
// node index update id=1 title=todo_Updated body=body_Updated isChecked=false
// node index delete id=2
// node index uncheck id=1
// node index check id=1
// node index list checked
// node index list unchecked
// node index list all

const helpers = require("./helpers");
const PATH = process.env.FILE_PATH || "./db.json";

function main(cmdArgs) {
  helpers.createIfNotExists(PATH);
  const [, , opr, ...options] = cmdArgs;

  const parsedObj = helpers.parseOptions(options);

  switch (opr) {
    case "add":
      helpers.add(parsedObj);
      break;
    case "update":
      helpers.update(parsedObj);
      break;
    case "delete":
      helpers.remove(parsedObj);
      break;
    case "list":
      helpers.getList(parsedObj);
      break;
    case "check":
      helpers.check(parsedObj);
      break;
    case "uncheck":
      helpers.uncheck(parsedObj);
      break;

    default:
      break;
  }
}

main(process.argv);
