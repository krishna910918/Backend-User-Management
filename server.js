const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const env = require('dotenv');

const userRoutes = require('./routes/user');

const app = express();

let url = 'mongodb://localhost:27017/User_Management'

env.config();

app.use(cors());

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json({extended : true}));

app.use('/',userRoutes);

mongoose.connect(url,{useNewUrlParser : true, useUnifiedTopology : true})
.then(() => {
    console.log('Database connected ...')
})
.catch((error) => {
    console.log(error.message)
})


app.listen(process.env.PORT,() => {
    console.log(`Server running on the port ${process.env.PORT}`)
})


