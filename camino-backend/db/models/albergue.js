const mongoose = require('mongoose');

const url = process.env.DB_URI;

mongoose.connect(url)
    .then(result => {
        console.log('connected to database')
    })
    .catch((error) => {
        console.log('error connected to database: ', error.message)
    })


// DEFINE SCHEMA(SHAPE OF COLLECTION)
const albergueSchema = new mongoose.Schema({
    name: String,
    address: String,
    town: String,
    phone: String,
    webUrl:  String,
    bookingUrl: String,
    locationInfo: String,
    availability: String,
    entryFrom: String,
    coordinates:
        {
            lat: String,
            long: String
        },
    accommodation: [
        {
            typeOfAccommodation: String,
            numOfPlaces: Number
        }
    ],
    amenities: [String],
    camino: String,
    image: String
})

albergueSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

// DEFINE COLLECTION
const Albergue = mongoose.model('Albergue', albergueSchema)

module.exports = mongoose.model('Albergue', albergueSchema);