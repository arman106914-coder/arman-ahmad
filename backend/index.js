const express = require('express');
const app = express()
const port = 3000
const cors = require('cors')
const { connectDB } = require('./Config/database');
const {createuser} = require("./Controllers/UserController")
 const {loginuser} = require("./Controllers/UserController")
const json = require('./jsons/event.json')
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/event',(req,res)=>{
  res.send(json)
})
app.post("/user",createuser)
app.post("/login",loginuser)
 connectDB(); // Call the connectDB function to establish a connection to MongoDB
app.listen(port, () => {  console.log(`Example app listening on port ${port}`)
})