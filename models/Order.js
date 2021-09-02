const mongoose = require(`mongoose`)

const OrderSchema = mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    dish:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model(`Orders`,OrderSchema)