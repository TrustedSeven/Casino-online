const express = require('express');

const app = express();

app.get("/",(req, res)=>{
    res.send("Hello Friend");
});

app.listen(7071, ()=>console.log("Server is running at port 7071"));