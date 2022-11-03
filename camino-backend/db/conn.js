// connect to atlas database
const { MongoClient } = require('mongodb');
require('dotenv').config();
const connectionString = process.env.DB_URI;

console.log(connectionString)




async function main() {
    const client = new MongoClient(connectionString);

    try {
        // connect to MongoDB cluster
        await client.connect();

        // Do something with db
        await listDatabases(client)

        await findByName(client, 'Ospitalia Refuge Municipal')

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
async function findByName(client, nameOfListing) {
    const result = await client.db("test").collection("albergues").findOne({ name: nameOfListing});

    if (result) {
        console.log(`Found albergue with name ${nameOfListing}`);
        console.log(result);
    } else {
        console.log(`No albergues found with name ${nameOfListing}`);
    }
}


