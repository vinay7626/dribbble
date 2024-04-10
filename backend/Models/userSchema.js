const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true,
    },
    userName:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    terms:Boolean,
    image:String,
    location:String,
    artist:Boolean,
    designer:Boolean,
    employer:Boolean
})
const user = new mongoose.model("user",userSchema);
module.exports = user;