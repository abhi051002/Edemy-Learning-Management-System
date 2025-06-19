import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';

// Initialize the Express application
const app = express();

// Connect to database
await connectDB();

// Middlewares
app.use(cors());
app.use(express.json());


// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Edemy API!');
});

// Port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});