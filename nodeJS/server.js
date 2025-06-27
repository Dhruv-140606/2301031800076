const http = require("http");
const { MongoClient } = require("mongodb");

// MongoDB connection URL and Database Name
const mongoURL = "mongodb://127.0.0.1:27017";
const dbName = "mydb"; // replace with your database name

// Create HTTP server
const server = http.createServer(async (req, res) => {
  try {
    // Connect to MongoDB
    const client = await MongoClient.connect(mongoURL, { useUnifiedTopology: true });
    const db = client.db(dbName);

    // Read from 'users' collection
    const users = await db.collection("users").find({}).toArray();

    // Send response
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));

    // Close connection
    client.close();
  } catch (error) {
    // Handle error
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("MongoDB Connection Failed: " + error.message);
  }
});

// Start server
server.listen(4000, () => {
  console.log("Server running at http://localhost:3000/");
});