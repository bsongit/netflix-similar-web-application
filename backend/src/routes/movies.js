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
    const response = await Movies.find().select(['url','url1','url2']);
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
      response = await Movies.find({category: req.body.category, genere : { $regex: '.*' + req.body.genere + '.*' }}).skip(req.body.skip).limit(15).select(['-magnet', '-eps'])
      : 
      response = await Movies.find({genere : { $regex: '.*' + req.body.genere + '.*' }}).skip(req.body.skip).limit(15).select(['-magnet', '-eps'])
    }


    var filmesLancamento = await Movies.find({release: { $regex: '.*' + '2020' + '.*' } , category: "filme", genere : { $regex: '.*' + req.body.genere + '.*' }}).skip(req.body.skip).limit(5).select(['-magnet', '-eps']);
    var seriesLancamento = await Movies.find({release: { $regex: '.*' + '2020' + '.*' } , category: "serie", genere : { $regex: '.*' + req.body.genere + '.*' }}).skip(req.body.skip).limit(5).select(['-magnet', '-eps']);
    var maisAssistidos = await Movies.find({imdb: { $regex: '9.' }}).limit(5).select(['-magnet', '-eps']);
    var outros = await Movies.find({category: req.body.cartegory || "filme", genere : { $regex: '.*' + req.body.genere + '.*' }}).skip(req.body.skip + 5).limit(5).select(['-magnet', '-eps']);
    res.send([...filmesLancamento,...seriesLancamento,...maisAssistidos,...outros,...response]);
  } catch (error) {
    res.send(error);
  }
});

router.post("/get3-carrossel", async (req, res) => {
  try {
    var response = [];
  {req.body.category !== ""?
      response = await Movies.find({category: req.body.category, genere : { $regex: '.*' + req.body.genere + '.*' }}).skip(Math.floor(Math.random() * 100)).limit(3).select(['-magnet', '-eps'])
      : 
      response = await Movies.find({genere : { $regex: '.*' + req.body.genere + '.*' }}).skip(Math.floor(Math.random() * 100)).limit(3).select(['-magnet', '-eps'])
      }

    res.send(response);
  } catch (error) {
    res.send(error);
  }
});
router.get("/get1", async (req, res) => {
  try {
    var response = await Movies.find().skip(Math.floor(Math.random() * 16000)).limit(1).select(['-magnet', '-eps'])
    res.send(response[0]);
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

router.post("/get-by-url-one", async (req, res) => {
  try {
    const response = await Movies.findOne({url1: req.body.url1});
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
    const items = await Movies.updateMany({title : { $regex : new RegExp("", "i")}}, {category: "filme"});
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

router.post("/update-id", async (req, res) => {
  try {
    const item = await Movies.updateMany({category : 'serie'}, {$unset: {title : '', urlImg3: ''}});
    // const item = await Movies.findOne({_id : '5fe8e2bc69322e22d076be51'});
    res.send(item);
  } catch (error) {
    res.send(error);
  }
});

{/* <video  controls playsinline  id='player' type='video/mp4' src=' */}
// '  ></video>

router.post("/update-one-by-name", async (req, res) => {
  try {
    const item = await Movies.updateOne({name : { $regex : new RegExp(req.body.title, "i")}}, {...req.body});
    res.send(item)
  } catch (error) {
    res.send(error);
  }
});


router.post("/update-one-by-title", async (req, res) => {
  try {
    const item = await Movies.updateOne({title : req.body.title}, {...req.body});
    res.send({id : req.body._id, item : item});
  } catch (error) {
    res.send(error);
  }
});

router.post("/get-player-video", async (req, res) => {

  var items = await Movies.find({playerVideo2 : { $regex : new RegExp('option_1.php', "i")}});
  res.send(items);


});



module.exports = router;
