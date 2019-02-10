const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({
    result: Math.random()
  });
});

module.exports = router;
