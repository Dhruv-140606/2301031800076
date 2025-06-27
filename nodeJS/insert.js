// insert.js
const mongo = require("mongodb").MongoClient;

const url = "mongodb://127.0.0.1:27017";

mongo.connect(url, (err, client) => {
  if (err) return console.log("Connection failed");

  const db = client.db("test");

  db.collection("example").insertMany([
    { name: "Dhruv" },
    { name: "ChatGPT" }
  ], (err, res) => {
    if (err) console.log("Insert failed");
    else console.log("Data inserted");
    client.close();
  });
});