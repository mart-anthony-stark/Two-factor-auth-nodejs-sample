const express = require("express");
const { engine } = require("express-handlebars");
const init = require("./utils/init");
require("dotenv").config({});

const app = express();

app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", require("./routes/home.route"));

init(app);
