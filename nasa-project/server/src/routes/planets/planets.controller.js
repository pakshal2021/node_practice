const { getAllPlanets } = require('../../models/planets.model');

function httpGetAllPlanets(req, res) {
    res.json(getAllPlanets())
}

module.exports = {
    httpGetAllPlanets
};