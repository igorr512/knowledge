const express = require('express');
const cors = require('cors');
const path = require('path');
const PORT = 5000;
const app = express();
app.use(cors());
app.use(express.json());

const procedureRoutes = require('./routes/procedureRoutes')

//DB Stuff
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mydb',);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database');
});

//App Stuff
app.use(express.static(path.join(__dirname, '../client/build')));

app.use('/procedures',procedureRoutes)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
  

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });