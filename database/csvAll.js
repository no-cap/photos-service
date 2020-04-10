const csvWriter = require('csv-writer').createObjectCsvWriter;

const faker = require('faker');

const cliProgress = require('cli-progress');
const progress = new cliProgress.SingleBar({}, cliProgress.Presets.shades_grey);

const randomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

const createAllData = () => {
    let data = [];
    let photo = {};
    for (var i = 0; i < 10000; i++) {
        photo.restaurant_id = randomNum(1, 999999);
        photo.photo_id = randomNum(1, 9999999);
        photo.date = faker.date.month() + 2018;
        photo.description = faker.random.words();
        photo.friends = faker.random.number(700);
        photo.icon = faker.image.avatar();
        photo.stars = faker.random.number(500);
        photo.url = `https://no-cap.s3-us-west-1.amazonaws.com/+${randomNum(1, 600)}.jpeg`
        photo.user_id = randomNum(1, 999999);
        photo.username = faker.name.firstName();
        data.push(photo);
    }
    return data;
};

const write = csvWriter({
    path: './all.csv',
    header:
        [
            { id: 'restaurant_id', title: 'RESTAURANT ID' },
            { id: 'photo_id', title: 'PHOTO ID' },
            { id: 'date', title: 'DATE' },
            { id: 'description', title: 'DESCRIPTION' },
            { id: 'friends', title: 'FRIENDS' },
            { id: 'icon', title: 'ICON' },
            { id: 'stars', title: 'STARS' },
            { id: 'url', title: 'URL' },
            { id: 'user_id', title: 'USER ID' },
            { id: 'username', title: 'USERNAME' }
        ]
});

let groups = 0;

const addData = () => {
    if (groups < 1000) {
        groups += 1;
        write.writeRecords(createAllData())
            .then(() => {
                year++;
                progress.increment();
                addData();
            });
    }
    else {
        progress.stop();
    }
}

progress.start(1000, 0);
addData();
