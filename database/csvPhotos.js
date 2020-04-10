const csvWriter = require('csv-writer').createObjectCsvWriter;

const faker = require('faker');

const cliProgress = require('cli-progress');
const progress = new cliProgress.SingleBar({}, cliProgress.Presets.shades_grey);

const randomNum = (min, max) => Math.floor((Math.random() * (max - min) + min));
let year = 2010;

const createPhotoData = () => {
    let photos = [];
    let photo = {};
    for (var i = 1; i <= 1000000; i++) {
        photo.restaurant_id = i;
        photo.date = faker.date.month() + year;
        photo.url = `https://no-cap.s3-us-west-1.amazonaws.com/+${randomNum(1, 600)}.jpeg`
        photo.description = faker.random.words();
        photo.user_id = randomNum(1, 999999);
        photos.push(photo);
    }
    return photos;
};

const write = csvWriter({
    path: './photos.csv',
    header:
        [
            { id: 'restaurant_id', title: 'RESTAURANT ID' },
            { id: 'date', title: 'DATE' },
            { id: 'url', title: 'URL' },
            { id: 'description', title: 'DESCRIPTION' },
            { id: 'user_id', title: 'USER ID' }
        ]
});

let groups = 0;

const addPhotos = () => {
    if (groups < 10) {
        groups += 1;
        write.writeRecords(createPhotoData())
            .then(() => {
                year++;
                progress.increment();
                addPhotos();
            });
    } else {
        progress.stop();
    }
}

progress.start(1000, 0);
addPhotos();