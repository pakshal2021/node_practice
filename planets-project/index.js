const { parse } = require('csv-parse');
const fs = require('fs');

const result = [];

function isHabitabel(planets) {
    return planets['koi_disposition'] === 'CONFIRMED' && planets['koi_insol'] > 0.36 && planets['koi_insol'] < 1.11 && planets['koi_prad'] < 1.6;
}

fs.createReadStream('kepler_data.csv')
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
    })
    .on('end', () => {
        console.log(result.map((planet) => {
            return planet['kepoi_name']
        }));
        console.log(result.length + " is habitable") 
    });