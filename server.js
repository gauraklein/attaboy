const fs = require("fs");

//Express Server
const express = require("express");
const app = express();
const port = 3000;
const { db } = require("./modules/db/dbConnection");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//Modules
const log = require("./modules/logging.js");
const mustache = require("mustache");

//Templating
// const homepageTemplate = fs.readFileSync('./templates/homepage.mustache', 'utf8');

app.listen(port, () => {
  log.info("Listening on port " + port + " 🎉🎉🎉");
});
