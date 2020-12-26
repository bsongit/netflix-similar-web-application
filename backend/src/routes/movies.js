const express = require("express");
const router = express.Router();
const Movies = require("../models/Movies");

router.get("/", async (req, res) => {
  try {
    const response = await Movies.find({});
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
