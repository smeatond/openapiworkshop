require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const yaml = require("js-yaml");
const fs = require("fs");
const swaggerUi = require("swagger-ui-express");

const swaggerDocument = yaml.load(
  fs.readFileSync(path.join(__dirname, "./apispec.yaml"), "utf8")
);

// middleware
app.use(cors());
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
