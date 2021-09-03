const mongoose = require(`mongoose`)

const OrderSchema = mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    dishesIds:[{
        type:String,
        required:true
    }],
    totalPrice:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model(`Orders`,OrderSchema)