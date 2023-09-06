const express=require('express')
const dummydata=require('./data/dummydata')
const app=express()
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("Welcome to express Js")
})
app.get('/home',(req,res)=>{
    req.body
  res.send("Welcome to express Js")
})
app.get('/api/main',(req,res)=>{
res.send({
    "msg":dummydata
})
})

app.listen(4004,()=>{
    console.log("you are running in on 4004");
})