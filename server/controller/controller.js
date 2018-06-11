const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const model = require('../model/model.js');

const app = express();
const PORT = 3000;


app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../../client')));

app.get('/descriptions', (req, res) => {
  const descParams = req.query;

  model.getDesc(descParams, (err, result) => {
    if (err) {
      res.status(404).send(err);
    }

    console.log(result);
    res.status(200).json(result);
  });
});

app.get('/summary', (req, res) => {
  const sumParams = req.query;

  model.getSummary(sumParams, (err, result) => {
    if (err) {
      res.status(404).send(err);
    }

    console.log(result);
    res.status(200).json(result);
  });
});

app.get('/highlights', (req, res) => {
  const highParams = req.query;

  model.getHighlights(highParams, (err, result) => {
    if (err) {
      res.status(404).send(err);
    }

    console.log(result);
    res.status(200).json(result);
  });
});

app.get('/amenities', (req, res) => {
  const amenParams = req.query;

  model.getAmen(amenParams, (err, result) => {
    if (err) {
      res.status(404).send(err);
    }

    console.log(result);
    res.status(200).json(result);
  });
});

app.get('/rules', (req, res) => {
  const ruleParams = req.query;

  model.getRules(ruleParams, (err, result) => {
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
