const { MongoClient, ServerApiVersion } = require('mongodb');
require("dotenv").config({path: "./config.env"})

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.ATLAS_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  ssl: true,
  tls: true,
  tlsAllowInvalidCertificates: true,
  connectTimeoutMS: 30000,
  socketTimeoutMS: 45000
});

let database;

module.exports = {
  connectToServer: async () => {
    try {
      await client.connect();
      database = client.db("BlogDatabase"); 
      console.log("Successfully connected to MongoDB.");
    } catch (err) {
      console.error("Error connecting to MongoDB:", err);
      throw err; 
    }
  },
  getDb: () => {
    if (!database) throw new Error("Database not initialized");
    return database;
  }
}

console.log("test server")
console.log('Trying to connect with URI:', process.env.ATLAS_URI.replace(/:([^:@]{8})[^:@]*@/, ':****@'));
/*
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
*/