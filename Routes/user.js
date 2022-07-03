import express from 'express';

// Initialize router
const router = express.Router();

// Initialize routes to /user
// All routes start with /user
router.get('/', (req, res) => {
    res.send('Welcome');
});

export default router;