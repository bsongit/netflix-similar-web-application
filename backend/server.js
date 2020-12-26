const http = require('http');
const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 5000;

// ROUTES
app.use('/api', require('./src/routes'))

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })