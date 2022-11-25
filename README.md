# Camino API
---
## Overview
An API which allows you to receive JSON data about albergues (accommodation) on 6 routes of the Camino de Santiago
#### Data scraped from *[gronze.com](https://www.gronze.com/)*
#### The following technologies were implemented in the creation of this project:
* MongoDB
* Mongoose
* Node/Express
* ReactJS
* Typescript
* Tailwindcss
---
## Installation
```sh
git clone https://github.com/ppiippaa/camino-api-project
```
* Configure .env.example files in camino-frontend and camino-backend directories to include your own credentials (REACT_APP_GOOGLE_KEY and MONGODB_URI only. REACT_APP_BASE_URL should remain the same to request data from production server)
* Remove .example extension from both .env.exmaple files
```sh
cd camino-frontend
npm install --force
npm run start
```
```sh
cd camino-backend
npm install --force
npm run start
```
* To request data from local backend, in camino-frontend .env:
#### ```REACT_APP_BASE_URL='localhost:5000'```


---
## API use
API endpoint:
#### https://camino-api.fly.dev/api/albergues *(returns first 10 albergues in the database)*
Available optional parameters:
* id
* page
* count
* camino
#### Example JSON response
```json 
  {
    "name": "Albergue Jesús y María",
    "address": "C. Compañía, 4",
    "town": "Pamplona / Iruña",
    "phone": "+34 948 222 644",
    "webUrl": null,
    "bookingUrl": null,
    "locationInfo": "Casco antiguo; a 100 m de la catedral",
    "availability": "Todo el año, excepto del 23 de diciembre al 7 de enero",
    "entryFrom": "12:00",
    "coordinates": {
      "lat": "42.818813796290",
      "long": "-1.641659941524"
    },
    "accommodation": [
      {
        "typeOfAccommodation": "shared",
        "numOfPlaces": 112
      }
    ],
    "amenities": [
      "Expiden la Credencial",
      "Cocina de uso libre",
      "Microondas",
      "Nevera",
      "Desayuno",
      "Lavadora y Secadora",
      "Sábanas",
      "Sábana bajera",
      "Funda de almohada",
      "Taquillas individuales con llave",
      "Accesible a personas con movilidad reducida",
      "Resguardo para bicicletas"
    ],
    "camino": "Camino Francés",
    "image": "https://www.gronze.com/sites/default/files/styles/rect_220/public/foto/albergue/1233/pamplona-jesus-1.jpg?itok=MUPBJVnX&timestamp=1650172940"
  }
```
---
