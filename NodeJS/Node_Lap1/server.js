const helpers = require("./helpers");

const express = require("express");

const useRouter = require("./routes/todo");

const app = express();
app.use(express.json());
app.use("/todo", useRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
  if (!err) return console.log(`server starts at Port ${PORT}`);
});
