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
    res.send(user);
});

export default router;