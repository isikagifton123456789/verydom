import express from 'express';

const router = express.Router();

// Example route for property management
router.get('/', (req, res) => {
  res.send('Property Management API');
});

export default router;