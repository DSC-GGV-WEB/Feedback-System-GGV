const MongoClient = require("mongodb").MongoClient;
const uri =
  https://dashboard.gitguardian.com/share/incidents/685c1aa0-bd82-4a32-a6ca-6d6d4f48f83f;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log(collection);

  console.log("Connection Established");
  client.close();
});
