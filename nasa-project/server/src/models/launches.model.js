const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    flightNumber : 100,
    mission : "Kepler Exploration X",
    rocket : "Explorer IS1",
    launchDate : new Date("December 27, 2030"),
    target : "Kepler-442 b",
    customer : ["Pakshal", "NASA"],
    upcoming : true,
    success : true,
}

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
    return Array.from(launches.values());
}

function addNewLaunch(launch) {
    latestFlightNumber++;
    launches.set(latestFlightNumber, Object.assign(launch,{
        flightNumber : latestFlightNumber,
        customer : ["Pakshal", "NASA"],
        upcoming : true,
        success : true,
    }));
}

function checkLaunchExists(launchID) {
    console.log(launches)
    return launches.has(launchID)
}

function abortLaunchByID(launchID) {
    const abortedID = launches.get(launchID);
    abortedID.upcoming = false;
    abortedID.success = false;
    return abortedID;
}

module.exports = {
    checkLaunchExists,
    getAllLaunches,
    addNewLaunch,
    abortLaunchByID
}
