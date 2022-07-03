// JSON uses single quotes
// index.js is used to setup the server

import express from 'express';
//const express = require("express"); ^

// Allows incoming post request bodies
import bodyParser from 'body-parser';

// Adding user.js to scope
// Can name default imports anything, used userRoutes 
import usersRoutes from './Routes/user.js';

// Initialize Express
const app = express()
// Captialize PORT - never change
const PORT = 5000;

// Initialize bodyParser middleware
// Using json data in application
// Common format for sending/request data from rest API
app.use(bodyParser.json());

// Starting path for all files with /user
// userRoutes - routes imported from ./Routes/user.js
app.use('/user', usersRoutes);

// Create routes
// "/" represents homepage (root)
// (req, res) - callback function
app.get('/', (req, res) => {res.send('Hey from homepage.');});

 
// Listen for incoming POST requests
// Using backtick notation for template
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

// Install nodemon - auto update server
// npm install --save-dev nodemon, dev b/c we're the only user

