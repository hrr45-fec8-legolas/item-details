const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../database/controllers')

console.log(db);

const PORT = 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../public'));

app.get('/items', (req, res) => {
  db((err, success) => {
    if (err) {
      console.log(err);
      res.sendStatus(404).end();
    } else {
      res.json(success).end();
    }
  })
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}.`)
})