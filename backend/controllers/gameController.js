const Game = require("../models/GameModel");
const response = require("./response");
const mongoose = require("mongoose");

//get all games
const getGames = async (req, res) => {
  //get all games in descending order by doc creation date
  const games = await Game.find({}).sort({ createdAt: -1 });
  response(res, games);
};

//get a single game
const getGame = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return response(res);
  }
  const game = await Game.findById(id);
  response(res, game);
};

//create a game
const createGame = async (req, res) => {
  const { title, category, mode } = req.body;
  try {
    const game = await Game.create({ title, category, mode });
    response(res, game);
  } catch (error) {
    console.log(error.message);
  }
};

//update a game
const updateGame = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return response(res);
  }

  const game = await Game.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  response(res, game);
};

//delete a game
const deletGame = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return response(res);
  }
  
  const game = await Game.findOneAndDelete({ _id: id });
  response(res, game);
};

module.exports = {
  getGames,
  getGame,
  createGame,
  updateGame,
  deletGame,
};
