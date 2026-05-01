const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello from Node.js and Express!");
});

module.exports = router;
