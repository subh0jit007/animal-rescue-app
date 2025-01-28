const mongoose = require('mongoose');

// mongoDB connection string
const dbURL = 'mongodb+srv://subhajit_007:1XQGkyv9Kh8cakRV@cluster0.1vslg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

//Connect to MongoDB
mongoose.connect(dbURL, { useNewUrlParser : true,
    useUnifiedTopology : true })
    .then(()=>{
        console.log('Connected to MongoDB');
    })
    .catch((err)=>{
        console.log('MongoDB connection error: ', err);
    });

//bring express
const express = require('express');
//run express
const app = express();
//choose PORT
const PORT = 3000;

//basic route
app.get('/', (req,res)=>{
    res.send('Hello, World! The Animal Rescue App Backened is Running')
});

//start the server
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});
