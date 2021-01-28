const express = require('express');
const database = require('./src/config/db.js');
const cors = require('./src/config/cors');
const app = express();

// const hostname = 'localhost';
// const port = 5000;

const hostname = '185.212.128.162';
const port = 3000;

app.use(express.json({ urlencoded: false }));

// CORS
cors.init(app)

//DB
database.connect();

app.get("/viuva-negra", (request, response) => {
  response.sendFile("./view/pages/viuva-negra-filme-2021.html")
  })

// ROUTES
app.use('/api', require('./src/routes'));

  app.listen(port,hostname, () => {
    console.log(`Example app listening at http://${hostname}:${port}`)
  });