-- PostgesSQL -- 

DROP DATABASE IF EXISTS restaurants;
CREATE DATABASE IF NOT EXISTS restaurants;
USE restaurants;

CREATE TABLE users (
  id INT,
  username VARCHAR,
  icon VARCHAR,
  stars SMALLINT,
  friends SMALLINT,
  PRIMARY KEY(id)
);
CREATE TABLE photos (
   id INT,
   restaurant_id INT,
   date VARCHAR,
   url VARCHAR,
   description VARCHAR,
   user_id INT,
   PRIMARY KEY(id),
   FOREIGN KEY (user_id) REFERENCES users (id)
);
