import { MongoClient } from "mongodb";

// Connection URL
const url = 'mongodb+srv://Adashti:Ab66095950@cluster-1.j0odgyr.mongodb.net/&tlsAllowInvalidCertificates=true';
let client:MongoClient| undefined= undefined

// Database Name
const dbName = 'test_project';

export function getClient(){
    if(client === undefined){
        client = new MongoClient(url);
        client.connect()
    }
    return client
}
