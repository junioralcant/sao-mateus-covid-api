const express = require("express");
const CovidController = require("./app/controllers/CovidController");

const routes = express.Router();

routes.get("/covids", CovidController.index);
routes.post("/covids", CovidController.store);
routes.put("/covids/:id", CovidController.update);

module.exports = routes;
