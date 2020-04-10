const csvWriter = require('csv-writer').createObjectCsvWriter;

const faker = require('faker');

const cliProgress = require('cli-progress');
const progress = new cliProgress.SingleBar({}, cliProgress.Presets.shades_grey);

const createUserData = () => {
    let users = [];
    let user = {};
    for (var i = 0; i < 1000; i++) {
        user.name = faker.name.firstName();
        user.icon = faker.image.avatar();
        user.stars = faker.random.number(500);
        user.friends = faker.random.number(700);
        users.push(user);
    }
    return users;
};

const write = csvWriter({
    path: './users.csv',
    header:
        [
            { id: 'name', title: 'NAME' },
            { id: 'icon', title: 'ICON' },
            { id: 'stars', title: 'STARS' },
            { id: 'friends', title: 'FRIENDS' }
        ]
});

let groups = 0;

const addUsers = () => {
    if (groups < 1000) {
        groups += 1;
        write.writeRecords(createUserData())
            .then(() => {
                progress.increment();
                addUsers();
            });
    } else {
        progress.stop();
    }
}

progress.start(1000, 0);
addUsers();