const { faker } = require('@faker-js/faker');
const fs = require('fs');

const generateFakeData = () => {
    const fakeData = {
        manufacturer: faker.vehicle.manufacturer(),
        model: faker.vehicle.model(),
        type: faker.lorem.lines(),
        url: faker.image.transport(800, 800, true)
    };
    return fakeData;
};
var liste = [];
for (var i = 0; i < 1000; i++) {
    liste.push(generateFakeData());
}
console.log(liste);
const jsonData = JSON.stringify(liste);
fs.writeFileSync('data.json', jsonData);

