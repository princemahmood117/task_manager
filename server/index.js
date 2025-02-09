const express = require('express')
const app = express()
require('dotenv').config()
require('./connection/connection')

const port = 5000;

app.use('/', (req,res) => {
    res.send('Task manager is running')
})




app.listen(port,()=> {
    console.log(`task manager app is running on port ${port}`);
})