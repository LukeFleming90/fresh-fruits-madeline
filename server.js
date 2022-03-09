/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////

require("dotenv").config(); // Load ENV Variables into process.env
const express = require("express"); // import express
const morgan = require("morgan"); //import morgan
const methodOverride = require("method-override"); // need to rename as the minus sign could throw off the syntax in certain files
// const mongoose = require("./models/connection");
// We can call mongoose by reference through Fruit variable
const path = require("path"); // built in node module we use to resolve paths more on this when we use it

const fruitController = require('./controllers/fruits')

/////////////////////////////////////////////////
// Create our Express Application Object Bind Liquid Templating Engine
/////////////////////////////////////////////////

// app is where we invoke the express method and allows us to invoke express in our server.js
const app = express();

// allows us to use jsx view engine
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx');

/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////

// runs between controller and callback function
app.use(morgan("tiny")); // logging
app.use(express.urlencoded({extended: true})); // parse urlencoded request bodies
app.use(methodOverride("_method")); // override for put and delete requests from forms
app.use(express.static("public")); // serve files from public statically

////////////////////////////////////////////
// Routes
////////////////////////////////////////////

app.use('/fruits', fruitController)
app.get('/', (req,res) => {
    res.send('Your server is running you better go catch it');
});

//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now listening on ${PORT}`));