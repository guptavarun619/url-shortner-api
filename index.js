const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect to database here
connectDB();

app.use(express.json({ extented: false }));

// Routes Defination

app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));


const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));