const express = require('express');
const router = require('./src/routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MongoDB Connection
const userName = "chowdhuryimran262";
const password = "chowdhuryimran262";
const databaseName = "GlobalRouteway";

const uri = `mongodb+srv://${userName}:${password}@cluster0.mmoqs.mongodb.net/${databaseName}?retryWrites=true&w=majority&appName=Cluster0`;
const options = { autoIndex: true };

mongoose.connect(uri, options)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.log('❌ Error connecting to MongoDB:', err));

// Routes
app.use('/api/v1', router);

// Catch-all 404 (Fix here)
app.use((req, res) => {
    res.status(404).send({ message: 'Not Found' });
});

module.exports = app;
