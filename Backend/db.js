const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://Santosh:Santosh%4063711@cluster0.cmycynz.mongodb.net/bussinessCard_App')

const CardSchema = new mongoose.Schema({
  name : String,
  descripttion : String,
  interests : [String],
  linkedin : String,
  twitter : String,
}) 

const Card = new mongoose.model('Card',CardSchema);

module.exports={
  Card
}