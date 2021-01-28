const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect to database here
connectDB();

app.use(express.json({ extented: false }));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));