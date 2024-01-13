const { parse } = require('csv-parse');
const path = require('path');
const fs = require('fs');

const result = [];

function isHabitabel(planets) {
    return planets['koi_disposition'] === 'CONFIRMED' && planets['koi_insol'] > 0.36 && planets['koi_insol'] < 1.11 && planets['koi_prad'] < 1.6;
}

function loadPlanetsDetails() {
    return new Promise((resolve, reject) => { 
        fs.createReadStream(path.join(__dirname, "..", "..", "data", 'kepler_data.csv'))
        .pipe(parse({
            comment: "#",
            columns: true
        }))
        .on('data', (data) => {
            if (isHabitabel(data)) {
                result.push(data);
            }
        })
        .on('error', (err) => {
            console.log(err)
            reject(err);
        })
        .on('end', () => {
            console.log(result.length + " is habitable") 
            resolve();
        });
    });
}

function getAllPlanets() {
    return result
}

module.exports = {
    loadPlanetsDetails,
    getAllPlanets,
};