# Social Media - React | Node | GraphQl

A social media site built with node react and GraphQl. The app uses react as front end and graphql as it's backend. React app is styled with sass and bundled with parcel minimizing library useage. 

The app is divided in two section

1. ./social-media-client - contains fornt-end which is based on react. library useage is kept to a minimum, only containing the libraries that are required. The react app is bundled using parcel - a zero configuration library. 

2. ./social-media-server - contains back-end which is built using express and graphql. The API is authenticated using JSON-WEB-TOKEN 

## APP function

### current implemented functions - 

1. User creation
2. Login
3. Dashboard route protection
4. Logout and basic UI
5. Profile detail creation
6. Dashboard view
7. Create and Get Posts Added
### future updates - 

1. Like a post
2. Add comment
3. upload image
4. Add friends

## Installation

clone the repo & cd into project

running the react-app | Front-end
>`cd social-media-client && npm install` <br/>
>`parcel index.html`

running the node-app | Back-end

>`cd social-media-server && npm install` <br/>
>`nodemon server`