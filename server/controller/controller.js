const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const model = require('../model/model.js');

const app = express();
const PORT = 3000;


app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../../client')));


app.get('/description', (req, res) => {
  const paramId = req.query;
  const storage = [];

  model.getDesc(paramId, (descriptionErr, descriptionResult) => {
    if (descriptionErr) {
      res.status(404).send(descriptionErr);
    }

    storage.push(descriptionResult);

    model.getSummary(paramId, (summaryErr, summaryResult) => {
      if (summaryErr) {
        res.status(404).send(summaryErr);
      }

      storage.push(summaryResult);

      model.getHighlights(paramId, (highlightErr, highlightResult) => {
        if (highlightErr) {
          res.status(404).send(highlightErr);
        }

        storage.push(highlightResult);

        model.getAmen(paramId, (amenitiesErr, amenitiesResult) => {
          if (amenitiesErr) {
            res.status(404).send(amenitiesErr);
          }

          storage.push(amenitiesResult);

          model.getRules(paramId, (rulesErr, rulesResult) => {
            if (rulesErr) {
              res.status(404).send(rulesErr);
            }

            storage.push(rulesResult);
            res.status(200).send(storage);
          });
        });
      });
    });
  });
});

app.listen(PORT, () => {
  console.log('Listening to ', PORT);
});
