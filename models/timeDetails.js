const mongoose = require("mongoose")

const timeDetailsSchema = mongoose.Schema({

    userId: {
        type:String
    },

    morning :{
                from:{type:String},
                to:{type:String},
    },
    evening : {
                from:{type:String},
                to:{type:String},
    },
    holiday : {
                day:{type:String},
                period:{type:String},
    }                 
})

const TimeDetail = mongoose.model("TimeDetail", timeDetailsSchema)

module.exports = TimeDetail;