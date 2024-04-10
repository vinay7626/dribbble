const express = require('express');
const app = express();
require('./DB/connection');
const router = require('./Routes/routes');
const cors = require("cors");
app.use(express.urlencoded({extended:true}))
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }));
require("dotenv").config();

const PORT = process.env.PORT;

// const corsOptions = {
//     origin: '*',
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true,
//     optionsSuccessStatus: 204,
// };

app.use(express.json());

app.use(cors());

app.use(router);


app.listen(PORT,() => {
    console.log(`running on ${PORT}`)
})
