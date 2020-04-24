const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

//create a GET route to get data from movie table
router.get("/", (req, res) => {
  const queryText = `SELECT * FROM movies`;

  pool
    .query(queryText)
    .then((response) => {
      console.log(response.rows);
      res.send(response.rows);
    })
    .catch((error) => {
      console.warn(`Error in SELECT movie query`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
