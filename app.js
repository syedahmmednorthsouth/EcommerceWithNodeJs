const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const path = require("path");
const cors = require("cors");
const mongoose = require('mongoose');
const connectDb = require("./config/db");

const app = express();


dotenv.config({ path: "./config/config.env" });

connectDb();

//routes
const authRouter = require('./routes/auth');

app.use(express.json());

app.use(cors());

app.use("/api/v1/auth", authRouter);








const PORT = 3000;

const server = app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
    )
);
