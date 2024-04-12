const isUserLoggedIn = require('../middlewares/isUserLoggedIn.middleware.js');
const userServices = require('../services/users.service.js');

const GetAllUsers = async (req, res) => {
    try {
        const results = await userServices.getAllUsers();
        return res.json(results);
    } catch (error) {
        console.error("Error Fetching Cities: ", error.message);
        return error
    }
}

module.exports = { GetAllUsers }