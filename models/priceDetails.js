const mongoose = require("mongoose")

const priceDetailsSchema = mongoose.Schema({
    userId: {
        type:String
    },

    monthlyCharges:{
        type:String
    },
    singleDayCharges:{
        type:String
    },
    specialDayVegCharges:{
        type:String
    },
    specialDaynonVegCharges:{
        type:String
    }
    
})

const PriceDetail = mongoose.model("PriceDetail", priceDetailsSchema)

module.exports = PriceDetail;