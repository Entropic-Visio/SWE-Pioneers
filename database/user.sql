-- Create the user database
CREATE DATABASE IF NOT EXISTS `user`;

USE `user`;

CREATE TABLE IF NOT EXISTS `users` (
  `ID` INT AUTO_INCREMENT PRIMARY KEY,
  `Username` VARCHAR(255) NOT NULL,
  `Email` VARCHAR(255) NOT NULL,
  `Password` VARCHAR(255) NOT NULL,
  `UserType` ENUM('Owner', 'Admin', 'User') NOT NULL DEFAULT 'User'
);

INSERT INTO `users` (Username, Email, Password, UserType) VALUES ('pioneer.owner', 'owner@pioneer.net', '$argon2id$v=19$m=65536,t=3,p=4$e7gshO3UyqxzToEWuHiQNw$drOQcSVhoDXhnTQKQY8WAHEtf6NuzwUr0q+zxZsEtug', 'Owner');
INSERT INTO `users` (Username, Email, Password, UserType) VALUES ('pioneer.admin1', 'admin1@pioneer.net', '$argon2id$v=19$m=65536,t=3,p=4$e7gshO3UyqxzToEWuHiQNw$drOQcSVhoDXhnTQKQY8WAHEtf6NuzwUr0q+zxZsEtug', 'Admin');
INSERT INTO `users` (Username, Email, Password, UserType) VALUES ('pioneer.admin2', 'admin2@pioneer.net', '$argon2id$v=19$m=65536,t=3,p=4$e7gshO3UyqxzToEWuHiQNw$drOQcSVhoDXhnTQKQY8WAHEtf6NuzwUr0q+zxZsEtug', 'Admin');
INSERT INTO `users` (Username, Email, Password, UserType) VALUES ('temp1.user', 'user1@pioneer.net', '$argon2id$v=19$m=65536,t=3,p=4$e7gshO3UyqxzToEWuHiQNw$drOQcSVhoDXhnTQKQY8WAHEtf6NuzwUr0q+zxZsEtug', 'User');
INSERT INTO `users` (Username, Email, Password, UserType) VALUES ('temp2.user', 'user2@pioneer.net', '$argon2id$v=19$m=65536,t=3,p=4$e7gshO3UyqxzToEWuHiQNw$drOQcSVhoDXhnTQKQY8WAHEtf6NuzwUr0q+zxZsEtug', 'User');