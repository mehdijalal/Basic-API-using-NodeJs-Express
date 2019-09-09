const express = require('express');
const MongoClient = require('mongodb').MongoClient;


// replace the uri string with your connection string.
const uri = "mongodb+srv://mehdi:Abc@def12345@cluster0-jp2ys.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
    const collection = client.db("MJMangoDB").collection("MJMangoCollection");
   // perform actions on the collection object
   console.log(collection);
   if(err){
       console.log('Error connecting');
   }
   console.log('you are connected');
    client.close();
  });
// MongoClient.connect(uri, function(err, client) {
//    if(err) {
//         console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
//    }
//    console.log('Connected...');
//    console.log(client);
//    const collection = client.db("MJMangoDB").collection("MJMangoCollection");
//    // perform actions on the collection object
//    client.close();
// });