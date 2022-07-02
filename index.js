// JSON uses single quotes

import express, { request, response } from 'express';
//const express = require("express");

// Allows cincoming post request bodies
import bodyParser from 'body-parser';

// Initialize Express
const app = express()
// Captialize PORT - never change
const PORT = 5000;

// Initialize bodyParser middleware
// Using json data in application
// Common format for sending/request data from rest API
app.use(bodyParser.json());

// Create routes
// "/" represents homepage
app.get('/', (req, res) => {
    console.log('Testing!');

    res.send('Hey from homepage.');
});
 
// Listen for incoming POST requests
// Using backtick notation for template
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

// Install nodemon - auto update server
// npm install --save-dev nodemon, dev b/c we're the only user

