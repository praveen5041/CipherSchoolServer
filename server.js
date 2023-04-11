const express=require('express')
const app=express()
 const userRoutes=require('./modles/user')
const cors=require('cors')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use('/users',userRoutes)


app.use(express.json())
const mongoose=require('mongoose');
require('dotenv').config()



mongoose.connect(process.env.MONGO_URL)
mongoose.connection.on('connected',()=>{
    console.log('Database connected !')
})
const PORT=5000
const server=require('http').createServer(app) 

app.use(cors({
    origin: 'http://localhost:3000',
  methods: ['GET', 'POST','UPDATE','DELETE']
}))

 

server.listen(PORT,()=>{
    console.log("server listing on ",PORT)
})