const mongoose = require("mongoose")

const menuDetailsSchema = mongoose.Schema({

    userId: {
        type:String
    },

    morning :{
                Monday:[{type:String}],
                Tuesday:[{type:String}],
                Wednesday:[{type:String}],
                Thursday:[{type:String}],
                Friday:[{type:String}],
                Saturday:[{type:String}],
                Sunday:[{type:String}],
    },
    evening : {
                Monday:[{type:String}],
                Tuesday:[{type:String}],
                Wednesday:[{type:String}],
                Thursday:[{type:String}],
                Friday:[{type:String}],
                Saturday:[{type:String}],
                Sunday:[{type:String}],
                }              
})

const MenuDetail = mongoose.model("MenuDetail", menuDetailsSchema)

module.exports = MenuDetail;