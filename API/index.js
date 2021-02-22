var express = require('express');
// Importing the express js module 

var app = express();

app.get("/getUsers",(req,res)=>{
res.send("Welcome");

});

app.get("/getTraining",(req,res)=>{

    var trainingObj = {
        trainingId: 10,
        trainingName: "Express Course",
        active: true
    }
res.send(trainingObj);
    
});


app.listen(4000);