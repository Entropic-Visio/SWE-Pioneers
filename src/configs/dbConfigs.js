module.exports = {
    WORLD_HOST: process.env.DATABASE_HOST || "localhost",
    WORLD_USER: "user",
    WORLD_PASSWORD: "password",
    WORLD_DATABASE: "world",
    USER_HOST: process.env.USER_DATABASE_HOST || "localhost",
    USER_USER: "user",
    USER_PASSWORD: "password",
    USER_DATABASE: "users",
}