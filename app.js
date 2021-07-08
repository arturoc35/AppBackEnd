const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const dotenv = require("dotenv");
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/blogPosts", (req, res) => {
//   res.send("the first blog");
// });

const connectDB = require("./config/db");

//load config
dotenv.config({ path: "./config/config.env" });

connectDB();

// routes
app.use("/", require("./routes/index"));

app.listen(3000);
