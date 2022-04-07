//calling the express and mongoose modules ans setting up the server to listen on port 3001 

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;

const app = express();
//mongooose connection to mongodb
//FBDB is the name of the database on monogodb 

mongoose.connect('mongodb://localhost:27017/FBDB')
    .then(async () => {
        console.log('Successfully Connected to MongoDB');
    })
    .catch(err => console.log(err));
//app.use is a middleware function that takes in a function as an argument

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(PORT, () => console.log('Server is Running'));