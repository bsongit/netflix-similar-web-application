const express = require("express");
const router = express.Router();
// const Log = require("../models/Log");

router.get("/", async (req, res) => {
  try {
    res.json("hello");
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
