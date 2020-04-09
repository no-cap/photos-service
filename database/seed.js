const db = require('./config.js');
const faker = require('faker');

const seedUsers = () => {

    for (let i = 0; i < 11; i++) {
        let name = faker.name.firstName();
        let icon = faker.image.avatar();
        let stars = faker.random.number(500);
        let friends = faker.random.number(600)
        let queryString = `INSERT INTO users (name, icon, stars, friends) 
        VALUES ('${name}', '${icon}', '${stars}', '${friends}')`
        db.query(queryString, (error, data) => {
            if (error) {
                console.log('Error seeding the users table in the database', error);
            }
        })
    }
};

const seedPhotos = () => {
    let restaurant_id = 1;
    let user_id = 1;

    for (let i = 0; i < 11; i++) {

        let date = faker.date.month() + " 2019";
        let url = `https://no-cap.s3-us-west-1.amazonaws.com/+${faker.random.number({ min: 1, max: 600 })}.jpeg`
        let description = faker.random.words();
        let queryString = `INSERT INTO photos (restaurant_id, date, url, description, user_id) 
        VALUES (${restaurant_id}, '${date}', '${url}', '${description}', ${user_id})`;
        db.query(queryString, (error, data) => {
            if (error) {
                console.log('Error seeding the photos table in the database', error);
            }
        })
        restaurant_id++;
        user_id++;
    }
};

seedUsers();
seedPhotos();

console.log('Database has been seeded');

module.exports = {
    seedUsers,
    seedPhotos
}