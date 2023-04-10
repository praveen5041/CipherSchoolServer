// const mongoose=require('mongoose')
// const multer = require('multer')
// const ImageSchema=mongoose.Schema({
//     name:{
//         type:String,
//         require:true
//     },
//     image:{
//         data:Buffer,
//         conentType:String
//     }
// })

// module.exports=ImgModle=mongoose.model('ImgModel',ImageSchema)
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String
  }
});

const MyModel = mongoose.model('MyModel', mySchema);

module.exports = MyModel;
