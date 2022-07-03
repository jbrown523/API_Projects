import express from 'express';

// Initialize router
const router = express.Router();

const user = [

    {
        firstName: "Jalen",
        lastName: "B",
        age: 21
    },
    {
        firstName: "Mikel",
        lastName: "B",
        age: 22
    }
    
]


// Initialize routes to /user
// All routes start with /user
// Get users in database
router.get('/', (req, res) => {
    // res.send - Output to client (browser)
    res.send(user);
});

// Send data frorm client to server
// Cannot use browser to test post request, browsers only make GET requests 
// Add user to database
router.post('/', (req, res) => {
    // POST request have req.body
    // {firstName: 'Jalen', lastName: 'B', age: 21 }

    // newUser defined as the body of the POST request
    // POST request via POSTMAN
    const newUser = req.body
    // Add values to user array
    user.push(newUser);

    // Output to client
    res.send(`User with name ${newUser.firstName} added to the database.`); // See output in browser
});

export default router;