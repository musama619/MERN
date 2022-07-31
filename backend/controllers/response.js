const response = (res, game) => {
  if (!game) {
    return res.status(404).json({ error: "No such game" });
  }
  res.status(200).json(game);
};

module.exports = response;
