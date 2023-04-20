//Модуль для работы с системой
const os = require("os"); 
let username = os.userInfo().username;

console.log(`Hello, ${username}`)