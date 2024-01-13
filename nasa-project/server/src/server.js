const PORT = process.env.PORT || 8000;
const http = require("http");
const app = require("./app");
const { loadPlanetsDetails } = require('./models/planets.model')
const server = http.createServer(app);
async function startServer(params) {
    await loadPlanetsDetails();
    server.listen(PORT, () => {
        console.log("Server is started on " + PORT);
    });
}
startServer();