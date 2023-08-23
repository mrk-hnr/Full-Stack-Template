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


// STEP 8 - SETTING UP MIDDLEWARE, it needs to be placed BEFORE any CRUD operations
app.set("view engine", "ejs") 
app.use(express.static("public")) // creates public folder where css, html, assets, etc... files are located
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

// STEP 7 (2/2) - ADD PORT ((1/2) is in .env file)

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}!`)
}) // process.env.XXXXX is the syntax to connect variables in env to server.js
