const logger = require("../controllers/logger.controller");
logger.init();

const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());

require("../routes/acronym.routes")(app, express, axios);

module.exports = app;
module.exports.axios = axios;