const express=require('express')
const app=express()
//for image uploads
const multer=require('multer');
//import image moels
const MyModel=require('./modles/image')
const router=express.Router()

app.use(express.json())
const mongoose=require('mongoose');
require('dotenv').config()
//const server=require('http').createServer(app)
mongoose.connect(process.env.MONGO_URL)
mongoose.connection.on('connected',()=>{
    console.log('Database connected !')
})


//storage
// const Storage=multer.diskStorage({
//     destination:'uploads',
//     filename:(req,file,cb)=>{
//         cb(null, file.originalname)
//     }
// })

// const upload=multer({
//     storage:Storage
// }).single('testImage')

// app.get('/',(req,res)=>{
//     res.send('upload file')
// })


// app.post('/upload',(req,res)=>{
//     upload(req,res,(err)=>{
//         if(err){
//             console.log(err)
//         }
//         else{
//             const Imge=new ImgModel({
//                 name:req.body.name,
//                 image:{
//                     data:req.file.filename,
//                     contentType:'image/jpeg'
//                 }
//             })
//             Image.save().then(()=>res.send('uploaded success')).catch((err)=>console.log(err))
//         }
//     })
// })
const upload = multer({ storage: multer.memoryStorage() });

app.post('/upload', upload.single('image'), (req, res) => {
  const myData = new MyModel({
    name: req.body.name,
    image: {
      data: req.file.buffer,
      contentType: req.file.mimetype
    }
  });

  myData.save()
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

//module.exports = router;
// In this example, we use the multer library to handle the image upload. We specify that we want to store the image in memory using multer.memoryStorage(). Then, we define a route to handle the upload. In the route handler, we create a new instance of our Mongoose schema and set the image field to an object containing the image data and content type. We save the data to the database using the save() method, and then we send the saved data as the response.

// Note that storing images as binary data in a field in the database can increase the size of the database and may not be the most efficient way to store images. Consider using a cloud storage service such as Amazon S3 or Google Cloud Storage if you need to store large numbers of images.







app.listen(5000,()=>{
    console.log("server listing on ",5000)
})