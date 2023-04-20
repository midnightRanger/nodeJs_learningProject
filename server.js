const http = require("http");
const os = require("os"); 

let username = os.userInfo().username;

http.createServer(function(request, response) {
    response.end("Hello Nodejs!");
}).listen(3000, "127.0.0.1", function() {
    console.log(`Server user is ${username}!`)
});