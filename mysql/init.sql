CREATE USER docker;
CREATE DATABASE docker;
USE docker;
CREATE TABLE employees (id int NOT NULL AUTO_INCREMENT,
                        name text(255) NOT NULL,
                        age int NOT NULL,
                        country text(255) NOT NULL,
                        position text(255) NOT NULL,
                        wage int NOT NULL,
                        PRIMARY KEY (id));

