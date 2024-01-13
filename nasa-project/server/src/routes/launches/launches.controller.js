const {
    getAllLaunches,
    addNewLaunch,
    checkLaunchExists,
    abortLaunchByID
} = require("../../models/launches.model");

function httpGetAllLaunches(req, res) {
    return res.json(getAllLaunches())
}

function httpAddNewLaunch(req, res) {
    const launch = req.body;
    if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target) {
        return res.status(400).json({
            "error" : "Missing required launch field"
        });
    }
    launch.launchDate = new Date(launch.launchDate);
    if (isNaN(launch.launchDate)) {
        return res.status(400).json({
            "error" : "Invalid launch date"
        });
    }
    addNewLaunch(launch)
    return res.json(launch);
}

function httpAbortLaunch(req, res) {
    const launchID = Number(req.params.id);
    if (!checkLaunchExists(launchID)) {
        console.log(launchID)
        return res.status(401).json({
           error : "Launch not found" 
        })
    }
    const abortedID = abortLaunchByID(launchID);
    return res.status(200).json(abortedID);
}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch
}