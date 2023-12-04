const mongoose = require('mongoose')

const transactionSchema = mongoose.Schema({

    
    userreg:{
        type :String,
        required : [true,'Please enter the Register number'],
    },

    bookname:{
        type:String  
    },
    author:{
        type:String
    },
    category:{
        type:String
    },

    returned :{
        type:String,
        default: 'No'
    },

    issuedAt :{
        type: Date,
        default: Date.now()
    }
        
    


})

let schema = mongoose.model('Transaction', transactionSchema)

module.exports = schema