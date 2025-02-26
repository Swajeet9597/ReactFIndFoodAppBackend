const mongoose = require("mongoose")

const ratingSchema = mongoose.Schema({
    customerUserId: {
        type:String
    },

    messUserId:{
        type:String
    },
    rating:{
        type:Number
    }
    ,
    feedback:{
        type:String
    },

    
},{timestamps: true})

const Rating = mongoose.model("Rating", ratingSchema)

module.exports = Rating;