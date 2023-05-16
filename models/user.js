function User(name, surname) {
    this.name = name;
    this.surname = surname;
    this.displayInfo = function() {
        console.log(`Имя: ${this.name}  Возраст: ${this.surname}`);
    }
}

User.prototype.sayHi = function() {
    console.log(`Привет, меня зовут ${this.name}`);
};

module.exports = User; 