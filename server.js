const express=require('express');
const dotenv=require("dotenv").config();
const port=process.env.PORT;
const app=express();

app.get("/api/contacts",(req,res)=>{
    res.send("get all contacts");
})
app.listen(port,(()=>{
    console.log(`server is listening on port ${port}`)
}))