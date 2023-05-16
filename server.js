const http = require("http");

//Модуль для работы с системой
const os = require("os"); 
let username = os.userInfo().username;

const greeting = require("./modules/greeting")

var helloMsg = greeting.getMessage(username)

//User Constuctor
const User = require("./models/user")

let ivan = new User("Ivan", 14);
ivan.displayInfo();

http.createServer(function(request, response) {
    response.end(helloMsg);
}).listen(3000, "127.0.0.1", function() {
    console.log(`Server is listening on 3000 port!`)
});