const EventEmitter = require('events');
const celebrity = new EventEmitter();

celebrity.on("race", (result) => {
    if (result == 'win')
        console.log("race win by celebrity");
});

celebrity.on("race", (result) => {
    if (result == 'win')
        console.log("why race win by celebrity ?");
});

process.on('exit', (code) => {
    console.log("All process is completed with code : " + code);
});

celebrity.emit('race', 'win');
celebrity.emit('race', 'lost');