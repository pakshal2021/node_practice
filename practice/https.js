const request = require('./request');
// import { send } from ('./request');
// const { send } = require('./request');
const response = require('./response');
// const { read } = require('./response');

function makeRequest(url, data) {
    request.send(url, data);
    // send(url, data);
    return response.read();
    // return read();
}

const responseData = makeRequest('https://google.com', 'hello');
console.log(responseData);