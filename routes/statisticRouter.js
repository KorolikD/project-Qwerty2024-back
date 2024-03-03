const { getVideosQuantity } = require("../controllers/statistics");

const statisticsRouter = require("express").Router();

statisticsRouter.get("/video-quantity", getVideosQuantity);

module.exports = statisticsRouter;
