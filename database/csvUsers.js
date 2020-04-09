const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const faker = require('faker');
counter = 0;

const writeUsers = () => {
    writer.pipe(fs.createWriteStream('users.csv'));
    let user_id = 1;
    for (var i = 0; i < 5; i++) {
        let name = faker.name.firstName();
        let icon = faker.image.avatar();
        let stars = faker.random.number(500);
        let friends = faker.random.number(600)
        writer.write({
            user_id: user_id,
            name: name,
            icon: icon,
            stars: stars,
            friends: friends
        })
        user_id++;
    }
    writer.end();
    console.log('Users CSV created, you did it!');
}

writeUsers();
