const mongoose = require("mongoose");
require("dotenv").config()

console.log(process.env.DB);
mongoose.connect(process.env.DB, {useNewUrlParser: true,})
  .then(() => console.log("connection start")).catch((err) => console.log(err));
