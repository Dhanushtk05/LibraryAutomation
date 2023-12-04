const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Please enter book name"],
        trim: true,
        maxLength: [1000, "Book name cannot exceed 1000 characters"]
    },
    author :{
        type:String,
        required:[true,"Enter the author name"]
    },
    noofcopies :{
        type:Number,
        default : 1
    },
    available :{
        type :Number
    },
    publisher :{
        type:String,
    },
    yearofPublish :{
        type:String
    },
    edition :{
        type:String
    },
    category: {
        type: String,   
    },
    
    uploadAt:{
        type: Date,
        default: Date.now()
    }
})


let schema = mongoose.model('Book', bookSchema)

module.exports = schema
