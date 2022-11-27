const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  genre:String,
  image:String,
  author:String,
  chapters:Number,
  views:Number,
  rating:Number,
  number_of_ratings:Number,
  synopsis:String
},
  {
    collection: 'novels'
  });

const Novel = mongoose.model('Novel', userSchema);

module.exports = Novel;