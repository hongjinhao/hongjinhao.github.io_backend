CREATE DATABASE `likes`;
-- SHOW DATABASES;
USE `likes`;
-- SHOW TABLES;

CREATE TABLE likeButtons (
	column_id INT PRIMARY KEY AUTO_INCREMENT,
    press_value INT,
    timestamp_like TIMESTAMP
);
INSERT INTO likeButtons (press_value, timestamp_like) VALUES (1, CURRENT_TIMESTAMP);
INSERT INTO likeButtons (press_value, timestamp_like) VALUES (-1, CURRENT_TIMESTAMP);

-- SELECT SUM(press_value) FROM likeButtons;
-- DROP TABLE likeButtons;