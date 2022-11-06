// connect to atlas database
const mongoQueries = require('./queries');
const { MongoClient } = require('mongodb');
require('dotenv').config();
const connectionString = process.env.DB_URI;

// to limit results, chain: .limit(limitNumber) to end of query

async function main() {
    const client = new MongoClient(connectionString);

    try {
        // connect to MongoDB cluster
        await client.connect();

    } catch(err) {
        console.log(err)
    } finally {
        await client.close()
    }
}

main().catch(console.error);




