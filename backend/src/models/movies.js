import { Schema, model } from "mongoose";

const movieSchema = new Schema({
  name: {type: String},
  urlImg: {type: String},
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
  url: {type: String}
});

export default Movies = model("movies", movieSchema);
