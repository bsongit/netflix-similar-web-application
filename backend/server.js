const express = require('express');
const database = require('./src/config/db.js');
const cors = require('./src/config/cors');
const app = express();

const hostname = '127.0.0.1';
const port = 5000;

app.use(express.json({ urlencoded: false }));

// CORS
cors.init(app)

//DB
database.connect();

// ROUTES
app.use('/api', require('./src/routes'));

  app.listen(port,hostname, () => {
    console.log(`Example app listening at http://${hostname}:${port}`)
  });