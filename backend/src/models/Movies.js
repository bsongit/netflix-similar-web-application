const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: {type: String},
  data: { type: Date, default: Date.now },
  category: {type: String},
  magnet: {type: String},
  imdb: {type: String},
  duration: {type: String},
  synopsis: {type: String},
  genere: {type: String},
  release: { type: String },
  author: {type: String},
  studio: {type: String},
  eps: {type: Array},
  url: {type: String},
  url1: {type: String},
  url2: {type: String},
  title: {type : String},
  urlImg: {type: String},
  urlImg2: {type: String},
  urlImg3: {type: String},
  playerVideo2 : {type: String},
  playerVideo3 : {type: String},
  plot: {type : String},
  classifBR: {type: String},
  releaseCinemaBr: {type: String},
  releaseDigital: {type: String},
  releaseDvD : {type: String},
  budget : {type: String},
  ticketgain: {type : String},
  trailer: {type: String},
  cast: {type: Array}

});

module.exports = Movies = mongoose.model("movies", movieSchema);
