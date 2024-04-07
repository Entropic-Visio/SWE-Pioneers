CREATE DATABASE `user` DEFAULT CHARACTER SET utf8mb4;

use `user`

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    user_type ENUM('admin', 'owner', 'regular') NOT NULL DEFAULT 'regular',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO `users` VALUES (1, 'master', 'master@pioneers.co.uk', 'aabbcc112233', 'owner');