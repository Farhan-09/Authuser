const express = require("express");

const app = express();

require("dotenv").config();

const connectoDB = require("./config/mogoose-connection");

const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");

// Middleware to parse incoming JSON data
app.use(express.json());

// Middleware to parse URL-encoded data (form data)
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

connectoDB(); //  connecting to database

app.use("/api/auth", authRoutes);

app.listen(3000);
