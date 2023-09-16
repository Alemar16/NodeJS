const express = require("express");
const routes = express.Router();

const users = require("../data/users.js");
/* console.log(users); */

routes.get("/api/users", (req, res) => {
  res.json(users);
});

module.exports = routes;
