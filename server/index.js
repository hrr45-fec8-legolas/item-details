const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const db = require('../database/controllers');

console.log(db);

const PORT = 3002;

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3005');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Pass to next layer of middleware
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../public')));

app.get('/items/:id', (req, res) => {
  const itemId = req.params.id;
  db(itemId, (err, success) => {
    if (err) {
      console.log(err);
      res.sendStatus(404).end();
    } else {
      res.send(success[0]).end();
    }
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}.`);
});
