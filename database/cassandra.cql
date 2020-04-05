-- Cassandra --

DROP KEYSPACE IF EXISTS restaurants;
CREATE KEYSPACE IF NOT EXISTS restaurants WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': 1};
USE restaurants;

CREATE TABLE photos (
  photo_id INT,
  restaurant_id INT,
  user_id INT,
  date VARCHAR,
  url VARCHAR,
  description VARCHAR,
  username VARCHAR,
  icon VARCHAR,
  stars SMALLINT,
  friends SMALLINT,
  PRIMARY KEY (restaurant_id, photo_id)
);
