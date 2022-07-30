const express = require("express");
const router = express.Router();
const Game = require("../models/GameModel");
//GET all games
router.get("/", (req, res) => {
  res.json({ msg: "ALL GAMES" });
});

//GET a single game
router.get("/:id", (req, res) => {
  res.json({ msg: "GET A SINGLE GAME" });
});

//POST a new game
router.post("/", async (req, res) => {
  const { title, category, mode } = req.body;
  try {
    const game = await Game.create({ title, category, mode });
    res.status(200).json(game);
  } catch (error) {
    console.log(error.message)
  }
});

//PUT a new game
router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE A GAME" });
});

//DELETE a game
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE A GAME" });
});

module.exports = router;
