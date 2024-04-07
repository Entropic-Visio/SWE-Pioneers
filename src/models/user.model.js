const userServices = require('../services/user.services.js');

class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

module.exports = { User }