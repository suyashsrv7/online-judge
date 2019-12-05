const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const connect = require('./dbConnect');

const port = 8000;
const routes = require('./routes/main.js');

app.use(express.static('assets'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);


app.listen(port, ()=> {
    console.log("Server running");
})