const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

//create a GET route to get data from movie table
router.get("/", (req, res) => {
  const queryText = `SELECT * FROM movies`;

  pool
    .query(queryText)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      console.warn(`Error in SELECT movie query`, error);
      res.sendStatus(500);
    });
});

//create a GET route to get genre data from junction table
router.get("/genre", (req, res) => {
  const queryText = `SELECT movies.id, genres.name as "genre_name" FROM movies
  JOIN movie_genre ON movies.id = movie_genre.movies_id
  JOIN genres ON genres.id = movie_genre.genre_id;`;

  pool
    .query(queryText)
    .then((response) => {
      console.log(response.rows);
      res.send(response.rows);
    })
    .catch((error) => {
      console.warn(`Error in SELECT genre query`, error);
      res.sendStatus(500);
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);

  const updatedMovie = req.body;
  console.log(updatedMovie);

  const queryText = `UPDATE movies 
  SET title =$1, description = $2
  WHERE id = $3;`;

  pool
    .query(queryText, [updatedMovie.title, updatedMovie.description, id])
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.warn(`Error in UPDATE movies query`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
