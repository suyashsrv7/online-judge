const express = require('express');
const shell = require('')
const app = express();
const port = 3000;
app.use('/', (req, res)=> {
    res.send("We are online")
})

app.listen(port, ()=>{
    // console.log("Server running");
})