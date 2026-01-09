const express = require("express");
const router = express.Router();
const programs = require("../data/programs.json");

router.get("/", (req, res) => {
  res.json(programs);
});

module.exports = router;
