 import express from "express"
 import bodyParser from 'body-parser'

import { getUsers,getUserById,CreateUser } from "./database.js"

 const app = express()

 //app.use(express.json())
 app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))

app.get("/users",async (req,res)=>{
    const users = await getUsers()
    res.send(users)
 })
 app.get("/user/:id",async (req,res)=>{
    const id = req.params.id
    const user = await getUserById(id)
    res.send(user)
 })

 app.post("/createuser",async (req,res)=>{
    const {uname,upassword} = req.body
    console.log(req.body)
    console.log(uname)
    console.log(upassword)
    const user = await CreateUser(uname,upassword)
    res.status(201).send(user)
 })

//  app.get("/download",async (req,res)=>{
   
//     res.download("database.js")
//  })



 app.listen(3031,()=>{
    console.log('Server is running')
 })




 