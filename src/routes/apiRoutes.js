const express = require("express");

const router = express.Router();

router.get("/message", (req, res) => {
  res.json({
    success: true,
    message: "API is working",
  });
});

module.exports = router;
