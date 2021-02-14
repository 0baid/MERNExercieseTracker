const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();

const PORT = process.env.PORT || 5000;
const app = express();
const connstr = process.env.CONNECTION_STRING

try {
    mongoose.connect(connstr,{useNewUrlParser:true,useCreateIndex:true, useUnifiedTopology:true});
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log("connection established to mongoDB")
    })
} catch (error) {
    console.error(error);
}  

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const usersRoutes = require('./routes/users.js');
const exercisesRoutes = require('./routes/exercises.js');

app.listen(PORT, () =>{
    console.log("Server is running on " + PORT);
})

app.use('/users',usersRoutes);
app.use('/exercises' , exercisesRoutes);
