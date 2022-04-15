console.log('Aluno: João Pedro Soares Ferreira');

const {MongoClient} = require('mongodb');

async function main(){

    const uri = "mongodb://dswa5:dswa5@cluster0-shard-00-00.dlwic.mongodb.net:27017,cluster0-shard-00-01.dlwic.mongodb.net:27017,cluster0-shard-00-02.dlwic.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-zh16lc-shard-0&authSource=admin&retryWrites=true&w=majority";
 
    const client = new MongoClient(uri);
 
    try {
        await client.connect();
        console.log('Servidor Conectado!')
        const database = client.db("ifsp");

        const contatos = database.collection("contatos");

        const findResult = await contatos.find({}).toArray();
        console.log('Foram encontrados os seguintes docs:');
        console.log(findResult);


    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}
main().catch(console.error);