
let currentDate = new Date();
module.exports.date = currentDate;

module.exports.getMessage = function(name) {
    let hour = currentDate.getHours();

    if (hour < 12) 
        return "Good morning, " + name;
    else if (hour > 16)
        return "Good evening, " + name;
    else 
        return "Good day, " + name; 
}

console.log(`Hello, ${username}`)