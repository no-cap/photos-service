/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3004;



// import middleware for body parser and json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// to display static file
app.use(express.static(path.join(__dirname, '../public')));

app.get('/seeAllPhotos', (req, res) => {
  //   console.log(res.body);
  Photo.find(res.body, (err, photo) => {
    if (err) {
      res.send(err);
    }
    // res.json(photo);
    res.send(photo);
  });
});

app.get('/seeAllPhotos/:photoId', (req, res) => {
  const { photoId } = req.params;
  Photo.findById(photoId, (err, photo) => {
    if (err) {
      res.send(err);
    }
    res.json(photo);
  });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
