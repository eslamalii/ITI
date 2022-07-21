const express = require("express");

const router = express.Router();

const PATH = process.env.FILE_PATH || "./db.json";

// Add Todo
router.post("/", (req, res) => {
  helpers.createIfNotExists(PATH);
  helpers.add(req.query);
  res.json({
    message: "Todo Added",
  });
});

// Get Todo List
router.get("/", (req, res) => {
  const data = helpers.getList(req.query);

  res.json(data);
});

// Get Todo (Checked)
router.get("/", (req, res) => {
  res.send(helpers.getList(req.query));
});

// Get Todo (unChecked)
router.get("/", (req, res) => {
  res.send(helpers.getList(req.query));
});

// Delete Todo
router.delete("/:id", (req, res) => {
  res.send(helpers.remove(req.params.id));
});

// Update Todo
router.put("/", (req, res) => {
  res.send(helpers.update(req.query));
});

// Check Todo
app.put("/check/:id", (req, res) => {
  res.send(helpers.check(req.params.id));
});

// Uncheck Todo
app.put("/uncheck/:id", (req, res) => {
  res.send(helpers.uncheck(req.params.id));
});

module.exports = router;
