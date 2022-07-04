import express from 'express';

// Configure Unique ID generator for Users - User ID's
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

// Initialize router
const router = express.Router();
// Array of users
//const user = []
// User array changes
let user = []


// Initialize routes to /user
// All routes start with /user
// Get users in database
router.get('/', (req, res) => {
    // res.send - Output to client (browser)
    res.send(user);
});

// Send  data frorm client to server
// Cannot use browser to test post request, browsers only make GET requests 
// Add user to database**
router.post('/', (req, res) => {
    // POST request have req.body - info about the request
    // {firstName: 'Jalen', lastName: 'B', age: 21 }

    // newUser defined as the body of the POST request
    // POST request via POSTMAN
    const newUser = req.body

    // Add values to user array
    // Create new user w/ user ID
    // ...user - spreads all properties of user: name age, etc ...
    // id: uuidv4() - adds user ID
    user.push({...newUser, id: uuidv4()});

    // Output to client
    // ${inline variable}
    res.send(`User with name ${newUser.firstName} added to the database.`); // See output in browser
});

// : means anything after '/' will work 
// whatever is after the 'user/' is the parameter
// /user/2 => req.params {id:2}
router.get('/:id', (req, res) => {
    const {id} = req.params.id;

    // Find user with the same id
    const findUser = user.find(user => user.id === id);

   res.send(findUser);
});

// Delete User** 
router.get('/:id', (req, res) => {
    const {id} = req.params;

    // Id to delete 123
    // Jalen 123, Kaene 321
    // 1st ineteration is Jalen, since the Id to delete is is 123, Jalen is deleted
    // 2nd ineteration is Kane, Id to delete is 123, (Kane user.id !== id), Kane not deleted

    // B/c !==, if the user.id = id, then delete
    // Returns false b/c the id is equal, so Jalen is deleted
    // Kane is not equal, returns true, keep Kane
    user = user.filter(user => user.id !== id);

    res.send(`User with the id ${user.id} is deleted`);
});

export default router;