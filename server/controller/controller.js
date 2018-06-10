const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const model = require('../model/model.js');

const app = express();
const PORT = 3000;


app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../../client')));

app.get('/descriptions', (req, res) => {
  const params = req.query;

  model.get(params, (err, result) => {
    if (err) {
      res.status(404).send(err);
    }

    console.log(result);
    res.status(200).json(result);
  });
});

app.listen(PORT, () => {
  console.log('Listening to ', PORT);
});
