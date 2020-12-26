const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  data: { type: Date, default: Date.now }
});

module.exports = Movies = mongoose.model("movies", movieSchema);
