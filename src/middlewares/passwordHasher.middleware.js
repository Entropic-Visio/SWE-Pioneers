const argon2 = require('argon2');
const crypto = require('crypto');

async function passwordHasher(password) {
    const salt = crypto.randomBytes(16);
    console.log(salt);
    const hashedPassword = await argon2.hash(password, { salt });
    return hashedPassword;
}

module.exports = passwordHasher;