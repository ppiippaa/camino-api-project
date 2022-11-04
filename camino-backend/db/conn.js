// connect to atlas database
const { MongoClient } = require('mongodb');
require('dotenv').config();
const connectionString = process.env.DB_URI;

console.log(connectionString)

// to limit results, chain: .limit(limitNumber) to end of query


async function main() {
    const client = new MongoClient(connectionString);

    try {
        // connect to MongoDB cluster
        await client.connect();

        // Do something with db
        await listDatabases(client)

        // await findByAlbergueName(client, 'Ospitalia Refuge Municipal');
        //
        // await findByCamino(client, 'Camino Francés');
        //
        // await findByTown(client, 'Saint-Jean-Pied-de-Port / Donibane Garazi');

        // await findByAmenity(client, amenities[1]);

        await findByAccomType(client, "shared");

    } catch(err) {
        console.log(err)
    } finally {
        await client.close()
    }
}

main().catch(console.error);

// list databases in cluster
async function listDatabases(client) {
    let databasesList = await client.db().admin().listDatabases();

    console.log('Databases:')
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));

}

// find by name in collection "albergues":
// (name will be in get req url as param)
async function findByAlbergueName(client, nameOfListing) {
    const result = await client.db("test").collection("albergues").findOne({ name: nameOfListing});

    if (result) {
        console.log(`Found albergue with name ${nameOfListing}:`);
        console.log(result);
    } else {
        console.log(`No albergues found with name ${nameOfListing}`);
    }
}

async function findByCamino(client, nameOfCamino) {
    const result = await client.db("test").collection("albergues").findOne({ camino: nameOfCamino});

    if (result) {
        console.log(`Found albergue on ${nameOfCamino}:`);
        console.log(result)
    } else {
        console.log(`No albergues found on ${nameOfCamino}`)
    }
}

async function findByTown(client, nameOfTown) {
    const result = await client.db("test").collection("albergues").findOne({ town: nameOfTown});

    if (result) {
        console.log(`Found albergue in ${nameOfTown}:`);
        console.log(result)
    } else {
        console.log(`No albergues found in ${nameOfTown}`);
    }
}

const amenities = [
    'Jardín',
    'Desayuno',
    'Sábanas',
    'Nevera',
    'Microondas',
    'Accesible a personas con movilidad reducida',
    'Resguardo para bicicletas',
    'Cena',
    'Cocina del uso libre',
    'Admiten mascotas',
    'Bar-Restaurantes'
]


async function findByAmenity(client, nameOfAmenity) {
    const result = await client.db("test").collection("albergues").findOne({ amenities: { $in: [nameOfAmenity]} });

    if (result) {
        console.log(`Found albergue with ${nameOfAmenity}:`);
        console.log(result)
    } else {
        console.log(`No albergue found with ${nameOfAmenity}`)
    }
}

async function findByAccomType(client, typeOfAccom) {
    const result = await client.db("test").collection("albergues").findOne({ "accommodation.typeOfAccommodation" : typeOfAccom})

    if (result) {
        console.log(`Found albergue with ${typeOfAccom}:`);
        console.log(result);
    } else {
        console.log(`No albergue found with ${typeOfAccom} accommodation`);
    }
}