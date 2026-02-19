import express from 'express';

const router = express.Router();

// Define your API routes here
router.get('/', (req, res) => {
    res.send('Welcome to the Minimal Web API!');
});

// Add more routes as needed

export default router;