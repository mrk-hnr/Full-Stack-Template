// STEP 2 - REQUIRING DEPENDENCIES

const express = require("express")
const app = express()
const cors = require("cors")
const MongoClient = require("mongodb").MongoClient
require("dotenv").config() // hides important details. create an env file and read data from it in our code. 


// STEP 3 - DECLARING VARIABLE
let db,
    dbConnectionString = process.env.DB_STRING, // grab variable from connection string from .env
    dbName = "star-wars-quotes", // name of a db from mongo site
    collection 

// STEP 4 - CONNECTING TO MongoDB

MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log("Database Connection Status: Success!")
        db = client.db(dbName)
        collection = db.collection("quotes") // collection/lists under dbName from site.
    })