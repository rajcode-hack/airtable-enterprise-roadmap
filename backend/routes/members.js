const express = require("express");
const router = express.Router();
const members = require("../data/members.json");

router.get("/", (req, res) => {
  res.json(members);
});

module.exports = router;
