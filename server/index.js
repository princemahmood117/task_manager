const express = require('express')
const app = express()
app.use(express.json())

require('dotenv').config()
require('./connection/connection')

const cors = require('cors')
app.use(cors())

const UserAPI = require('./routes/user')

const port = 5000;

app.use('/api/v1',UserAPI)

// http://localhost:5000/api/v1/login




app.get('/', (req,res) => {
    res.send('Task manager is running')
})


app.listen(port,()=> {
    console.log(`task manager app is running on port ${port}`);
})