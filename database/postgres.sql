-- PostgesSQL -- 

DROP DATABASE IF EXISTS restaurants;
CREATE DATABASE IF NOT EXISTS restaurants;
USE restaurants;

CREATE TABLE "photos" (
   "id" SERIAL PRIMARY KEY,
   "restaurant_id" INT,
   "date" VARCHAR,
   "url" VARCHAR,
   "description" VARCHAR,
   "user_id" INT
);

CREATE UNIQUE INDEX photo_id ON photos (id);