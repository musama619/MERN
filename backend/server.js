const express = require('express')
require('dotenv').config()

const app = express();
const user = require('./routes/user')

//middleware
app.use(express.json())

app.use((request, response, next) => {
  console.log(request.path, request.method);
  next();
});

//routes
app.use('/api/user', user)

app.listen(process.env.PORT, () => {
  console.log("listening on 4000");
});
