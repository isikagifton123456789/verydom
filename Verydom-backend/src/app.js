import 'dotenv/config'; // Load environment variables
import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';

const app = express();

app.use(cors({ origin: 'http://localhost:5173' })); // Replace with your frontend's URL
app.use(express.json());

// Default route for the root path
app.get('/', (req, res) => {
  res.send('Welcome to the Verydorm Backend API');
});

// Register user routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));