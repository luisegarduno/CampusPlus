DROP DATABASE IF EXISTS canvasplus;
CREATE DATABASE canvasplus; 

USE canvasplus;

DROP TABLE IF EXISTS user_type;
CREATE TABLE user_type(
	id INT AUTO_INCREMENT,
    type VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO user_type (type) VALUES ('student'), ('counselor'), ('teacher');

DROP TABLE IF EXISTS user;
CREATE TABLE user(
	id INT AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    username VARCHAR(100),
    password VARCHAR(500),
    email VARCHAR(500),
    userType_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (userType_id)
	   REFERENCES user_type(id)
	   ON UPDATE CASCADE
);

INSERT INTO user (first_name, last_name, username, password, email, userType_id) VALUES 
	('Jane', 'Doe', 'JDoe', 'Password123', 'jdoe@canvasPlus.com', 1),
    ('John', 'Smith', 'JSmith', '123Password', 'jadoe@canvasPlus.com', 2),
    ('Sarah', 'Jones', 'SJones', '_asdf_123', 'svega@canvasPlus.com', 3),
    ('Emily', 'Smith', 'ESmith', null, null, 1);
    