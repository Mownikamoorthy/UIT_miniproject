const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url); // no options needed now

async function run() {
    try {
        await client.connect();
        const db = client.db('ss'); // creates db if not exist
        const collection = db.collection('users');

        const result = await collection.insertOne({ name: "John", age: 25 });
        console.log("Inserted 1 document into 'ss' database in 'users' collection");
    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

run();

