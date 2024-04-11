CREATE DATABASE `users` DEFAULT CHARACTER SET utf8mb4;

USE `users`

GRANT ALL PRIVILEGES ON users.* TO 'user'@'%';


CREATE TABLE users IF NOT EXISTS (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(50) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    UserType ENUM('admin', 'owner', 'regular') NOT NULL DEFAULT 'regular',
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO `users` VALUES (1, 'master', 'master@pioneers.co.uk', 'aabbcc112233', 'owner');