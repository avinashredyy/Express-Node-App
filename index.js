//Importing Express into our application
const express = require('express');

// Importing moment to get current date to use in the logger middleware
const moment = require('moment');

//Express() provides its in-built methods to be used through variable app
const app = express();

// Setting the port number either to the environment port number or to 5000
const PORT = process.env.PORT || 5000;

//Creating and using a middleware (Logger). A middleware always executes when a request is made to the server.
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
}

//Initializing the middleware
app.use(logger);

// Request and response when user visits localhost:5000
app.get('/', (req, res) => {
    res.send('<h1> Welcome to the Express App </h1>');
    console.log('HomePage');
})

// Request and response when user visits localhost:5000/hello
app.get('/hello', (req, res) => {
    res.send('<h1> Hello World </h1>');
})

// Method to listen to requests to the server on the specified port number
app.listen(PORT, () => {
    console.log(`Serevr started on ${PORT}`);
})