const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username:{
        type:String,
        index: true
    },
    password:{
        type:String
    },
    role:{
        type:String
    }
})

const User = mongoose.model("User",userSchema);

module.exports = User;
