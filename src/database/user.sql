CREATE DATABASE `users` DEFAULT CHARACTER SET utf8mb4;

USE `users`;


DROP TABLE IF EXISTS `users`;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    user_type ENUM('regular', 'admin', 'owner') NOT NULL DEFAULT 'regular',
    created_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

INSERT INTO `users` VALUES ('john_doe', 'hashed_password', 'john@example.com', 'regular');
INSERT INTO `users` VALUES ('admin_user', 'hashed_password', 'admin@example.com', 'admin');