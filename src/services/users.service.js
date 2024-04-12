const { userConnection } = require('./db.js');
const argon2 = require('argon2');
const passwordHasher = require('../middlewares/passwordHasher.middleware.js');

async function getAllUsers() {
    // SQL query to select all cities from the 'city' table
    const sql = "SELECT * FROM `users`";
    try {
        // Execute the SQL query asynchronously
        const [rows, fields] = await userConnection.query(sql);

        // Get the number of cities returned
        console.log(`/users: ${rows.length} rows`);

        // Return the reterived rows
        return rows;
    } catch (error) {
        // Handle errors which occur during database query execution
        console.error(error);

        // Render 500.pug if an error occurs
        return null
    }
};

async function getUserFromDatabase(email, password) {
    const sql = "SELECT * FROM `users` WHERE Email = ? and Password = ?";
    try {
        const [rows, fields] = await userConnection.query(sql, [email, password]);

        if (rows.length === 0) {
            return false;
        }

        console.log(rows[0]);
        return true;

    } catch (error) {
        console.error('Error Retrieving User from Database:', error);
        return null;
    }
};

async function searchEmailInDatabase(email) {
    const sql = "SELECT * FROM `users` WHERE Email = ?";
    try {
        const [rows, fields] = await userConnection.query(sql, [email]);
        console.log("Length", rows.length);
            
        if (rows.length === 0) {
            return false;
        } else {
            return true;
        }

    } catch (error) {
        console.error('Error Retrieving User from Database:', error);
        return null;
    }
};

async function addUserToDatabase(username, email, password) {
    const hashedPassword = await passwordHasher(password);
    const sql = "INSERT INTO users (Username, Email, Password) VALUES (?, ?, ?)";
    const values = [username, email, hashedPassword];
    try {
        console.log('Executing Query:', sql, values);
        await userConnection.query(sql, values);
        return true;
    } catch (error) {
        console.error("Error Adding User to Database:", error);
        return false;
    }
};

async function verifyUser(email, password) {
    try {

        const user = await userConnection.query("SELECT * FROM users WHERE Email = ?", [email]);
  
        if (!user.length) {
            return null;
        }
  
        const hashedPassword = user[0][0].Password;
            
        if (typeof hashedPassword !== 'string' || !hashedPassword.length) {
            console.log(user[0]);
            console.error('Invalid Hashed Password Format');
            return null;
        }
    
        const valid = await argon2.verify(hashedPassword, password);
        return valid ? user[0][0] : null;

    } catch (error) {
        console.error('Error verifying user:', error);
        return null;   
    }
}

async function deleteUserFromDatabase(email, password) {
    try {
        await userConnection.query("DELETE FROM users WHERE Email = ?", [email]);
        return true
    } catch (error) {
        console.error('Error Deleting User: ', error);
        return false;
    }
};

module.exports = { 
    getAllUsers,
    getUserFromDatabase, 
    searchEmailInDatabase, 
    addUserToDatabase,
    verifyUser,
    deleteUserFromDatabase,
};