const {
  getStatistics,
} = require("../controllers/statistics");

const statisticsRouter = require("express").Router();

statisticsRouter.get("/", getStatistics);

module.exports = statisticsRouter;
