const mongoose = require("mongoose")

const viewsSchema = mongoose.Schema({
    customerUserId: {
        type:String
    },

    messUserId:{
        type:String
    }
}, { timestamps: true })

const View = mongoose.model("View", viewsSchema)

module.exports = View;