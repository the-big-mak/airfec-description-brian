const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const model = require('../model/model.js');

const app = express();
const PORT = 3000;


app.use(bodyParser.json());
app.listen(PORT);
console.log('Listening to ', PORT);

app.use(express.static(path.join(__dirname, '../client')));

app.get('/description', (req, res) => {
  const params = req.query;

  model.get(params, (err, result) => {
    if (err) {
      res.status(404).send(err);
    }

    res.status(200).send(JSON.parse(result.body));
  });
});

