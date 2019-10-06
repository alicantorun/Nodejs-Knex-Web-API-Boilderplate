const express = require("express");
const router = express.Router();
const db = require("../../database");

router.get("/", (req, res) => {
  db.select()
    .from("todo")
    .then(data => {
      res.send(data);
    });
  // SELECT * FROM todo;
});

router.post("/", (req, res) => {
  db.insert(req.body)
    .returning("*")
    .into("todo")
    .then(data => {
      res.send(data);
    });
  // INSERT INTO tablename(column1, column2) VALUES(column1_value, column2_value);
  // SELECT * FROM table WHERE id = inserted_row
});

router.patch("/:id", (req, res) => {
  db("todo")
    .where({ id: req.params.id })
    .update(req.body)
    .returning("*")
    .then(data => {
      res.send(data);
    });

  //SELECT * FROM todo WHERE id = ouId
});

router.put("/:id", (req, res) => {
  db("todo")
    .where({ id: req.params.id })
    .update({
      title: req.body.title || null,
      is_done: req.body.is_done || null
    })
    .returning("*")
    .then(data => {
      res.send(data);
    });
});

router.delete("/:id", (req, res) => {
  db("todo")
    .where({ id: req.params.id })
    .del()
    .then(data => {
      res.json({ succes: true });
    });
});

router.get("/:id", (req, res) => {
  db("todo")
    .where({ id: req.params.id })
    .select()
    .then(data => {
      res.send(data);
    });
});
module.exports = router;
