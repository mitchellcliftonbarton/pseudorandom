var http = require('http');

const PORT=3001;

function handleRequest(request, response) {
  response.end('It works!' + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
  console.log("server listening", PORT);
});