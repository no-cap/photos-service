-- Cassandra --

DROP KEYSPACE IF EXISTS restaurants;
CREATE KEYSPACE IF NOT EXISTS restaurants WITH REPLICATION = {'class': 'NetworkTopologyStrategy', 'datacenter1' : 3 };
USE restaurants;

CREATE TABLE restaurants.photos (
  restaurant_id INT,
  photo_id INT,
  user_id INT,
  date text,
  url text,
  description text,
  username text,
  icon text,
  stars SMALLINT,
  friends SMALLINT,
  PRIMARY KEY (restaurant_id, photo_id)
);
