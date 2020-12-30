const express = require("express");
const router = express.Router();
const Movies = require("../models/Movies");

router.get("/", async (req, res) => {
  try {
    const response = await Movies.find();
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

router.post("/get15", async (req, res) => {
  try {
    const response = await Movies.find().skip(req.body.skip).limit(15);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

router.post("/create", async (req, res) => {
  try {
    const response = await Movies.create({name: req.body.name, urlImg: req.body.urlImg});
    res.send(response)
  } catch (error) {
    res.send(error);
  }
});

router.post("/delete", async (req, res) => {
  try {
    const response = await Movies.deleteOne({_id: req.body._id});
    res.send(response)
  } catch (error) {
    res.send(error);
  }
});

router.post("/delete-duplicated", async (req, res) => {
  try {
    const movies = await Movies.find({name : req.body.name});
    var removed = null;
    if(movies.length > 1){
      removed = await Movies.deleteOne({_id: movies[0]._id});
    }
    res.send(removed)
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
