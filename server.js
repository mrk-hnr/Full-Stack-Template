// DEPENDENCIES SECTION START

const express = require("express")
const app = express()
const cors = require("cors")
const MongoClient = require("mongodb").MongoClient
require("dotenv").config() // hides important details. create an env file and read data from it in our code. 

// DEPENDENCIES SECTION END