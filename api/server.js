const express = require('express')
const app =express();
const cors = require('cors');
var port =  process.env.PORT || 8080;
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 
  };
app.use(cors(corsOptions));
app.get('/', (req, res) => res.send('Welcome to Express'));

app.listen(port, function() {
    console.log("Running FirstRest on Port "+ port);
})

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
const apiRoutes=require('./routes')
app.use('/',apiRoutes);

//connect to mongodb
const mongoose = require('mongoose');
const dbPath = 'mongodb://localhost:27017/';
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(dbPath, options);
mongo.then(() => {
    console.log('connected');
}, error => {
    console.log(error, 'error');
})
