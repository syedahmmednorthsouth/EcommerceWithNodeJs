const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const path = require("path");
const cors = require("cors");
const mongoose = require('mongoose');
const connectDb = require("./config/db");

const app = express();

app.use(express.json());

dotenv.config({ path: "./config/config.env" });

connectDb();





const PORT = 3000;

const server = app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
    )
);
