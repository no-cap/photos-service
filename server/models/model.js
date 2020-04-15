const db = require('../../database/config.js');

module.exports = {
    photos: {
        getAll: function (req, callback) {
            const randomNum = Math.floor(Math.random() * (9999999 - 1) + 1);
            const queryStr = `SELECT * FROM photos WHERE restaurant_id = ${randomNum}`;
            db.query(queryStr, callback);
        },
        getOne: function (req, callback) {
            const randomNum = Math.floor(Math.random() * (9999999 - 1) + 1);
            const queryStr = `SELECT * FROM photos WHERE id = ${randomNum}`;
            db.query(queryStr, callback);
        },
        post: function (params, callback) {
            const queryStr = 'insert into messages(message_body) values (?)';
            db.query(queryStr, params, function (err, results) {
                callback(err, results);
            });
        }
    },

    users: {
        get: function (callback) {
            const queryStr = 'select * from users';

            db.query(queryStr, function (error, results) {
                callback(error, results);
            }
            );
        },
        post: function (params, callback) {
            const queryStr = 'insert into users(username) values (?)';
            db.query(queryStr, params, function (error, results) {
                callback(error, results);
            });
        }
    }
};

