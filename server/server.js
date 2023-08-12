const express = require("express");
const morgan = require("morgan");
// cors lets you use the same local host for front-end and back-end = (useful for developing!) 
const cors = require("cors");
require("dotenv").config()
// import routers from the routes folder
const getRoutes = require('./routes/duckies')

const app = express();

// middleware (global) = using CORS
app.use(cors())
// this is needed to access post/patch method's request body and stuff
app.use(express.json())
app.use(morgan('tiny'))

// this middleware (function) logs to the console methods used;
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// connecting mongodb
const mongoose = require("mongoose");
 mongoose.connect(process.env.DATABASE_URI)
 .then(()=> console.log('connected to mongoose'))
 .then(() =>{
    // listen for request
    app.listen(process.env.PORT || 5050, (err) => err? console.log('error happened'): console.log('no errors connecting'))

 })
//  .catch((error) => {
//     console.log(error)
//  })


// Route Handler; use get route using getRoutes from the routes folder; if the route is '/ducks/all'
app.use('/ducks',getRoutes)

// universal route(...)
app.use("*", (req, res) => {res.status(404).send();})




// exporting app
module.exports = app