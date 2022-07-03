import exports from 'express';

// Initialize router
const router = express.Router();

// Initialize routes to /users
router.get('/users', (req, res) => {
    res.send('Welcome');
});

export default router;