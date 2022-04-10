const express = require('express');
const app = express();
const port = 3000;
const tasks = require('./routes/tasks')
const mongoose = require('mongoose')
require('dotenv/config')



// connect database

mongoose.connect( process.env.MONGO_URL)
.then( () => console.log('CONNECTED TO THE DB...'))
.catch( (err) => console.log(err))


// middleware
app.use(express.json());

//Routes
app.use('/api/v1/tasks', tasks)


app.listen(port, () => console.log(`connected to port ${port} `))