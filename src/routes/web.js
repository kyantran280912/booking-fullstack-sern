const express = require("express");
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/blog", (req, res) => {
    return res.send("Hello blog");
  });
  return app.use("/", router);
};
module.exports = initWebRoutes;
