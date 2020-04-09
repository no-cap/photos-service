const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const faker = require('faker');
counter = 0;

const writePhotos = () => {
    writer.pipe(fs.createWriteStream('photos.csv'));
    let restaurant_id = 1;
    let user_id = 1;
    for (var i = 0; i < 5; i++) {
        let date = faker.date.month() + " 2019";
        let url = `https://no-cap.s3-us-west-1.amazonaws.com/+${faker.random.number({ min: 1, max: 600 })}.jpeg`
        let description = faker.random.words();
        writer.write({
            restaurant_id: restaurant_id,
            user_id: user_id,
            date: date,
            url: url,
            description: description
        })
        restaurant_id++;
        user_id++;
    }
    writer.end();
    console.log('Photos CSV created, you did it!');
}

writePhotos();