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
router.get("/all-url", async (req, res) => {
  try {
    const response = await Movies.find().select('url');
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});
router.get("/just-filmes", async (req, res) => {
  try {
    const response = await Movies.find({category: "filme", release: null});
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});
router.get("/just-series", async (req, res) => {
  try {
    const response = await Movies.find({category: "serie", release: null});
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

router.post("/get15", async (req, res) => {
  try {
    var response =  [];
    {req.body.category !== ""?
      response = await Movies.find({category: req.body.category}).skip(req.body.skip).limit(15)
      : 
      response = await Movies.find().skip(req.body.skip).limit(15)
    }
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});
router.post("/get-by-name", async (req, res) => {
  try {
    var response = [];
    {req.body.category !== ""?
      response = await Movies.find({name : { $regex : new RegExp(req.body.name, "i")}, cartegory : req.body.cartegory}).limit(5)
      :
      response = await Movies.find({name : { $regex : new RegExp(req.body.name, "i")}}).limit(5)
    }
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});
router.post("/get-by-url", async (req, res) => {
  try {
    const response = await Movies.findOne({url: req.body.url});
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



// modify

router.post("/set-categories", async (req, res) => {
  try {
    const items = await Movies.updateMany({name : { $regex : new RegExp("Temporada", "i")}}, {category: "serie"});
    res.send(items);
  } catch (error) {
    res.send(error);
  }
});
router.post("/update-one", async (req, res) => {
  try {
    const item = await Movies.updateOne({_id : req.body._id}, {...req.body});
    res.send({id : req.body._id, item : item});
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
