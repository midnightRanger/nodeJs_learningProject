const http = require("http");

const greeting = require("./modules/greeting")

http.createServer(function(request, response) {
    response.end("Hello Nodejs!");
}).listen(3000, "127.0.0.1", function() {
    console.log(`Server is listening on 3000 port!`)
});