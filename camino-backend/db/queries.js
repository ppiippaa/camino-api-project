async function findAlbergueById(client, id) {
    const result = await client.db("test").collection("albergues").findOne({ id });

    if (result) {
        console.log(`Found albergue with ${id}:`);
        return result;
    } else {
        console.log(`No albergues found with id ${id}`);
        return null;
    }
}

module.exports = {
    findAlbergueById
}


