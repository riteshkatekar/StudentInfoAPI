// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

// Middleware
app.use(express.json());

// Routes
const studentRoutes = require('./routes/student');
app.use('/api', studentRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
