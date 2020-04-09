-- PostgesSQL -- 

DROP DATABASE IF EXISTS restaurants;
CREATE DATABASE IF NOT EXISTS restaurants;
USE restaurants;

CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR,
  "icon" VARCHAR,
  "stars" SMALLINT,
  "friends" SMALLINT
);
CREATE TABLE "photos" (
   "id" SERIAL PRIMARY KEY,
   "restaurant_id" INT,
   "date" VARCHAR,
   "url" VARCHAR,
   "description" VARCHAR,
   "user_id" INT
);

-- ALTER TABLE "photos" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");