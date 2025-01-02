-- This schema shows some MySQL statements used to create the database and table
-- This database is queried from the website backend to get the number of likes and 
-- also increase and decrease the number of likes
-- To get: SUM(press_value)
-- To increase: insert a new row with press_value = 1
-- To decrease: insert a new row with press_value = -1
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