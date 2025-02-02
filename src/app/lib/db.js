import { MongoClient } from 'mongodb';

let client;
let clientPromise;

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error('Please add your MongoDB URI to .env');

if (!client) {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default async function getDb() {
  const connection = await clientPromise;
  return connection.db(process.env.MONGODB_DB); // Ensure this is set in .env
}
