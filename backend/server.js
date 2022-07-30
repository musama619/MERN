const express = require("express");
require("dotenv").config();

const app = express();
const game = require("./routes/game");
const mongoose = require("mongoose");
//middleware
app.use(express.json());

app.use((request, response, next) => {
  console.log(request.path, request.method);
  next();
});

//routes
app.use("/api/game", game);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("listening on 4000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
