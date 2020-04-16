const models = require('../models/model.js');

module.exports = {
    photos: {
        getAll: function (req, callback) {
            models.photos.getAll(req, (error, results) => {
                if (error) {
                    callback(error, null);
                }
                else {
                    callback(null, results);
                }
            })

        },
        getOne: function (req, callback) {
            models.photos.getOne(req, (error, results) => {
                if (error) {
                    callback(error, null);
                }
                else {
                    callback(null, results);
                }
            })

        },
        post: function (req, res) {
            console.log("Request.body from the controller: ", req.body)

            var params = [req.body.message_body];

            models.photos.post(params, (error, results) => {
                if (error) {
                    throw new Error('Error posting photos to db', error);
                }
                res.sendStatus(200);
            });
        }
    },

    users: {
        get: function (req, callback) {
            models.users.get(req, (error, results) => {
                if (error) {
                    callback(error, null);
                }
                else {
                    callback(null, results);
                }
            });
        },
        post: function (req, res) {
            console.log("Request.body from the contoller: ", req.body);
            var params = [req.body.user_name];

            models.users.post(params, function (error, results) {
                if (error) {
                    throw new Error('Error posting to users', error);
                }
                res.sendStatus(200);
            });
        }
    }
};

