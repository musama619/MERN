const express = require("express");
const { getGames, getGame, createGame, updateGame, deletGame } = require("../controllers/gameController");
const router = express.Router();


//GET all games
router.get("/", getGames);

//GET a single game
router.get("/:id", getGame);

//POST a new game
router.post("/", createGame);

//PUT a new game
router.patch("/:id", updateGame);

//DELETE a game
router.delete("/:id", deletGame);

module.exports = router;
