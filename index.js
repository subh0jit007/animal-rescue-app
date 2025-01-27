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
