const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://dswa5:dswa5@cluster0.dlwic.mongodb.net/ifsp?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("ifsp").collection("contatos");
  const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);/// perform actions on the collection object
  client.close();
});