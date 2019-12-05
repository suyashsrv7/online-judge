const mongoose = require('mongoose');
const config = require("config");

mongoose.connect(config.get("dbUrl"), {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {console.log('Coneection established')})
    .catch(err => {console.log(err)})

