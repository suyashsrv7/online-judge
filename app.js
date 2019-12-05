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

/* ====================================== */
   //       Performing Tests
/* ====================================== */

// const request = require("request");
// const cheerio = require("cheerio");
// const {c, cpp, node, python, java} = require('compile-run');
// const path = require('path');
// function testing() {
//     const file = path.join(__dirname, "test.cpp");
//     console.log(file);
//     let resultPromise = cpp.runFile(file);
//     resultPromise
//         .then(result => {
//             console.log(result);//result object
//         })
//         .catch(err => {
//             console.log(err);
//         });

// }
// testing();

/* ======================================== */


app.listen(port, ()=> {
    console.log("Server running");
})