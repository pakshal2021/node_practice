const http = require('http');
const PORT = 3000;


const server = http.createServer((req, res) => {
    if (req.url === '/pakshal') {
        res.writeHead(200, {
            'Content-Type': 'application/json',
        });
        res.end(JSON.stringify({
            id: 1,
            name: "pakshal shah"
        }));
    } else if (req.url === '/namrata') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>');
        res.write('<body>');
        res.write('<p>Hello I am Namrata Here');
        res.write('</p>');
        res.write('<body>');
        res.write('</html>');
        res.end();
    } else {
        res.statusCode = 400;
        res.end();
    }
});

server.listen(PORT, () => {
    console.log('Listing on port ' + PORT);
})