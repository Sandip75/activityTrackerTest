const express = require('express');
const app = express();
const port = 8000;

app.listen(port,(err)=>{
    if(err){
        console.log(`Error in server:${err}`);
    }
    console.log(`Port created at : ${port}`);
})