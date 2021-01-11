const routes = require('express').Router();

routes.use('/movies', require('./movies'));

module.exports = routes;