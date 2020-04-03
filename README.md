# photos-service

A service that displays scrollable and clickable photos for given restuarant pages. 

## Getting Started

[] Install dependencies - ` npm install `
[] generate a config.js file from the template with S3 keys from AWS
[] npm start to start server
[] npm run build:react to start compiler/transpile

## Related Projects

  - https://github.com/no-cap/popular-dishes-service
  - https://github.com/no-cap/reviews-service
  - https://github.com/no-cap/restaurant-info-service

## API Documentation
---
### CREATE

`POST /photo`

  Posts a photo url to the photos table
  
  Example input:
  ```
  {
    date: "03/01/18"
    username: "Martin Bushwik"
    comment: "I couldn't believe it wasn't butter, I just couldn't."
    url: "https://amazon.s3/no-cap/photo/1"
  }
  ```
---
### READ

`GET restaurant/456/photos`
  
  Gets all photos for restaurant with an id of 456

  Example response:
  ```
  [
    {
      id: 2
      date: 01/22/19,
      username: "Penelope Rivers",
      comment: "The most delicious salad I've ever eaten! It was also the only salad I've ever eaten.",
      url: "https://amazon.s3/no-cap/photo/2"
    },
    {} ...
  ]
  ```
`GET /photo/1234`
  
  Gets the photo with an id of 1234

  Example response:
  ```
  {
    id: 5
    date: 04/22/14,
    username: "Joan Sounders",
    comment: "Not the best, not the worst.",
    url: "https://amazon.s3/no-cap/photo/5"
  }
  ```
---
### UPDATE

`PUT /photo/1234`
  
  Updates the photo with the id of 1234

  Example input:
  ```
  {
    date: "03/01/18"
    username: "Martin Bushwik"
    comment: "I was happy I didn't have to catch the fish myself."
    url: "https://amazon.s3/no-cap/photo/1"
  }
  ```
---
### DELETE

`DELETE /photo/1234`
  
  Deletes the photo with the id of 1234

  Example input:
  ```
  {
    method: 'DELETE',
    url: /photo/1234
  }
  ```
---

## Schema Design

![Photos Table](https://user-images.githubusercontent.com/6081506/78412140-1933fa80-75c7-11ea-9c60-e19f13cd4d57.png)


CREATE TABLE restaurants.photos (
  
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
  PRIMARY KEY (restaurant_id (partitionKey), photo_id (clusterKey))

) 

