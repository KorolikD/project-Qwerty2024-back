const {
  getVideosQuantity,
  getUsersQuantity,
} = require("../controllers/statistics");

const statisticsRouter = require("express").Router();

statisticsRouter.get("/videos/quantity", getVideosQuantity);

statisticsRouter.get("/users/quantity", getUsersQuantity);

module.exports = statisticsRouter;
