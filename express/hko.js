const express = require("express");
const router = express.Router();
const getCurrentWeather = require("../hko/getCurrentWeather");

router.get("/currentWeather", async (req, res) => {
  try {
    const data = await getCurrentWeather();
    res.send({ result: data, success: true });
  } catch (err) {
    res.send({
      result: {},
      success: false
    });
  }
});

module.exports = router;
