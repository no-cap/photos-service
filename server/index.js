require('newrelic');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3004;

const controller = require('./controllers/controller.js');

// import middleware for body parser and json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public')));

app.get('/photosForRestaurant', (req, res) => {
    console.log('Received a GET request for all photos for a restaurant');

    controller.photos.getAll(req, (error, results) => {
        if (error) {
            console.log('Error getting all photos from db', error);
            res.status(400);
        }
        else {
            console.log(results);
            res.status(200);
            res.send(results);
        }
    })
});
app.get('/onePhoto', (req, res) => {
    console.log('Received a GET request for one photo');

    controller.photos.getOne(req, (error, results) => {
        if (error) {
            console.log('Error getting a photo from the db', error);
            res.status(400);
        }
        else {
            console.log(results);
            res.status(200);
            res.send(results);
        }
    })
});

app.get('/users', (req, res) => {
    console.log('Received a GET request for one photo');

    controller.users.get(req, (error, results) => {
        if (error) {
            console.log('Error getting users from the db', error);
            res.status(400);
        }
        else {
            console.log(results);
            res.status(200);
            res.send(results);
        }
    })
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
