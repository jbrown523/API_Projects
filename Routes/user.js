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
        firstName: "kane",
        lastName: "ke",
        age: 22
    }
    
]


// Initialize routes to /user
// All routes start with /user
router.get('/', (req, res) => {
    console.log(user);
    // res.send - Output to client
    res.send(user);
});

// Send data frorm client to server
// Cannot use browser to test post request, browsers only make GET requests 
// 
router.post('/', (req, res) => {
    console.log("POSTMAN REACHED");

    // POST request have req.body
    console.log(req.body);

    const newUser = req.body

    // Add values to user array
    user.push(newUser);

    // Output to client
    res.send(`User with name ${newUser.name} added to the database.`); // See output in browser
});

export default router;